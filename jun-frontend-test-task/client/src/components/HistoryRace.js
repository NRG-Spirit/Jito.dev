

function HistoryRace(props) {

  return (
    <div className='history_race'>

    <ol>
    <h3>RACE NUMBER {props.raceNumber+1}</h3>
      {props.race.map((horse, index) => {
          return (
            <div className="history_place" key={index}>
              <li>{horse}</li>
            </div>
          )
        })
      }
      </ol>
    </div>
  )
}

export default HistoryRace