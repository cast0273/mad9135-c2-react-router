import './home.css'

import { NavLink } from 'react-router-dom'

export default function Home (props) {
  function handleClick () {
    props.fetchData()
  }

  return (
    <div className='Home'>
      <h1>Home</h1>
      <h2>Click on the button to load user list data.</h2>
      <NavLink
        activeClassName='active'
        className='button'
        to='/userList'
        onClick={handleClick}
        exact
      >
        Get my User List now!
      </NavLink>
    </div>
  )
}
