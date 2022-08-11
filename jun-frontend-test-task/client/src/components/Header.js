import { NavLink } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header_wrapper'>
        <NavLink to="/">HORSE RACE</NavLink>
        <NavLink to="/history">HISTORY</NavLink>
      </div>
    </div >
  )
}

export default Header