import './userList.css'

import User from '../User/User'

import { useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom'

export default function UserList ({ data }) {
  useEffect(() => {
    console.log('useEffect was called.')
  }, [data])

  function findUser (id) {
    return data.find((item, index) => parseInt(id) === index)
    //return an object for the single user
  }

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
            <NavLink to={`/userList/${index}`}>View Details</NavLink>
          </div>
        ))}
      </div>

      <div className='user-details'>
        <Route path='/userList/:id'>
          <User findUser={findUser} />
        </Route>
      </div>
    </div>
  )
}
