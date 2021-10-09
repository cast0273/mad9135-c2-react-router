import './main.css'

import UserList from '../UserList/UserList'
import UserAddress from '../UserAddress/UserAddress'
import Error from '../Error/Error'

import { Switch, Route, Redirect } from 'react-router-dom'

export default function Main () {
  return (
    <div className='Main'>
      <Switch>
        <Route path='/'>Instructions</Route>

        <Route path='/userList'>
          <UserList />
        </Route>

        <Route path='/userAddress'>
          <UserAddress />
        </Route>

        <Route path='/error'>
          <Error />
        </Route>

        <Redirect to='error' />
      </Switch>
    </div>
  )
}
