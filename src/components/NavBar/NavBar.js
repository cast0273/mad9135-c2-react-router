import 'navBar.css'
import { NavLink } from 'react-router-dom'

import './.css'

export default function NavBar () {
  return (
    <div className='NavBar'>
      <NavLink activeClassName='active' to='/' exact>
        Home
      </NavLink>
      <NavLink activeClassName='active' to='#' exact>
        User List
      </NavLink>
      <NavLink activeClassName='active' to='#' exact>
        Address List
      </NavLink>
      <NavLink activeClassName='active' to='/404'>
        Error 404: Page not found.
      </NavLink>
    </div>
  )
}
