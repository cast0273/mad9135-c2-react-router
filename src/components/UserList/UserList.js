import './userList.css'

import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function UserList ({ data }) {
  useEffect(() => {
    console.log('useEffect was called.')
  }, [data])

  return (
    <div className='UserList'>
      {data.length === 0 && <p>Loading...</p>}
      <div className='user-list'>
        {data.map((item, index) => (
          <div key={index} className='user'>
            <div className='wrapper'>
              <img src={item.picture.medium} alt='User thumbnail' />
              <div className='userDetails'>
                <p>{`${item.name.first} ${item.name.last}`}</p>
                <p>{item.email}</p>
                <p>{item.cell}</p>
              </div>
            </div>
            <NavLink to={`/userList/${index + 1}`}>View Details</NavLink>
          </div>
        ))}
      </div>

      {/* <div className='planet-details'>
        <Route path='/planets/:id'>
          <Planet findPlanet={findPlanet} />
        </Route>
      </div> */}
    </div>
  )
}
