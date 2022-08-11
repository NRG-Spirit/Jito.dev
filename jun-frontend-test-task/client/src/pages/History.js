import { useSelector } from 'react-redux';
import HistoryRace from '../components/HistoryRace';
import './history.css'

function History() {
  const history = useSelector((state) => state.horse.history);
  if (history.length===0) return <h2 className='history_title'>HISTORY EMPTY</h2>
  else return (
    <div className='history_wrapper'>
      <h2>HISTORY:</h2>
      {history.map((race,index) => {
        return (
          <HistoryRace race={race} raceNumber={index} key={index}/>
        )
      })
      }
    </div>
  )
}

export default History