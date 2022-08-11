
function HorseProgress(props) {
  let line = 0;
  line = String(props.horse.distance / 10) + '%';
  return (
    <div className='horseProgress_wrapper'>
      <div className='horseProgress_name'>{props.horse.name}</div>
      <div className='horseProgress_bar'>
        <div className='horseProgress_status' style={{ width: line, background: props.colour}}></div>
      </div>
      {(props.place>=0)
      ? <div className='horseProgress_place'>
        <span>{props.place+1}</span>
      </div>
      : <div className='horseProgress_place'/>
      }
    </div>
  )
}

export default HorseProgress