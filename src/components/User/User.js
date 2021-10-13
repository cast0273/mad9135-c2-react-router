import './user.css'

import { useLocation } from 'react-router'

export default function User () {
  console.log(useLocation())
  const { state } = useLocation()
  console.log(state)

  return (
    <>
      {state === undefined && <p>Loading...</p>}

      <div>
        <div className='user'>
          <div className='wrapper'>
            <img src={state && state.item.picture.large} alt='User thumbnail' />
            <div className='userDetails'>
              <p>{`${state && state.item.name.first} ${state &&
                state.item.name.last}`}</p>
              <p>{state && state.item.email}</p>
              <p>{state && state.item.cell}</p>
            </div>
          </div>
        </div>

        <div className='userMoreDetails'>
          <div className='location'>
            <h3>Address</h3>
            <p>{state && state.item.location.street.name}</p>
            <p>{`${state && state.item.location.city}, ${state &&
              state.item.location.state}`}</p>
            <p>{state && state.item.location.postcode}</p>
          </div>

          <div className='login'>
            <h3>Login</h3>
            <p>UserID: {state && state.item.login.uuid}</p>
            <p>Username: {state && state.item.login.username}</p>
            <p>Password: {state && state.item.login.password}</p>
          </div>
        </div>
      </div>
    </>
  )
}
