import { io } from "socket.io-client";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRace, setHistory } from '../redux/horseReducer'
import ProgressBar from "../components/ProgressBar";
import Spinner from "../components/Spinner";
import './horseRace.css'


function HorseRace() {
  const socket = io(process.env.REACT_APP_API_URL);
  const dispatch = useDispatch();
  const [places, setPlaces] = useState([]);
  const [isRace, setIsRace] = useState();

  useEffect(() => {
    socket.on('ticker', round => {
      console.log('ds');
      dispatch(setRace(round));
      handleWinner(round);
      if (places.length === 6) {
        handleFinish();
      }
    });
  }, [socket, dispatch, places]);

  const handleWinner = (round) => {
    for (let i=0; i<round.length; i++) {
      if (round[i].distance === 1000 && !places.includes(round[i].name)) {
        let arr = places;
        arr.push(round[i].name);
        setPlaces(arr);
      }
    }
  }
  const handleFinish = () => {
    socket.disconnect();
    dispatch(setHistory(places));
    setIsRace(false);
  }
  const startRace = () => {
    setPlaces([]);
    setIsRace(true);
    socket.emit('start');
  }

  return (
    <div className='horseRace_wrapper'>
      <h2>HORSE RACE</h2>
      {isRace
        ? <Spinner />
        : <button className='startRace' onClick={startRace}>Start race</button>
      }
      <ProgressBar places={places}/>
    </div>
  );
}

export default HorseRace;
