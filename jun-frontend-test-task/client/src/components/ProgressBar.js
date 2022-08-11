import { useSelector } from 'react-redux';
import HorseProgress from './HorseProgress';

function ProgressBar(props) {
  const horses = useSelector((state) => state.horse.race);
  const colours = ['#ff6600', '#0000ff', '#99cc00', '#b30086', '#e6e600', '#e600e6']

  if (horses.length > 0)
    return (
      <div className='progressBar'>
        {horses.map((horse, index) => {
          const place=props?.places?.indexOf(horse.name);
          return (<HorseProgress key={index} horse={horse} colour={colours[index]} place={place} />
          )
        })
        }
      </div>
    )
  else
    return (
      <></>
    )
}

export default ProgressBar