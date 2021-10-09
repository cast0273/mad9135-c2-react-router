import './navBar.css'
import { NavLink } from 'react-router-dom'

export default function NavBar () {
  return (
    <div className='NavBar'>
      <NavLink activeClassName='active' to='/' exact>
        Home
      </NavLink>
      <NavLink activeClassName='active' to='/userList' exact>
        User List
      </NavLink>
      <NavLink activeClassName='active' to='/userAddress' exact>
        Address List
      </NavLink>
      <NavLink activeClassName='active' to='/404'>
        Error
      </NavLink>
    </div>
  )
}
