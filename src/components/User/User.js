import './user.css'

import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

export default function User (props) {
  //
  const { findUser } = props
  const { id } = useParams()

  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log('useEffect1 was called.')
    setUser(findUser(id))
  }, [findUser, id])

  useEffect(() => {
    console.log('useEffect2 was called.')
    console.log(user)
  }, [user])

  return (
    <>
      <div id={id}>
        {console.log(user)}
        {/* {user.length === 0 && <p>Loading...</p>} */}

        {/* <div className='user'>
          <div className='wrapper'>
            <img src={user.picture.large} alt='User thumbnail' />
            <div className='userDetails'>
              <p>{`${user.name.first} ${user.name.last}`}</p>
              <p>{user.email}</p>
              <p>{user.cell}</p>
            </div>
          </div>
        </div> */}

        {/* <div className='location'>
          <h3>Address</h3>
          <p>{user.location.street}</p>
          <p>{`${user.location.city}, ${user.location.state}`}</p>
          <p>{user.location.postcode}</p>
        </div> */}

        {/* <div className='login'>
          <h3>Login</h3>
          <p>{user.login.uuid}</p>
          <p>{user.login.username}</p>
          <p>{user.login.password}</p>
        </div> */}
      </div>
    </>
  )
}
