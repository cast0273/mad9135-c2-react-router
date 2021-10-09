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

        <Route path='/userlist'>
          <UserList />
        </Route>

        <Route path='/useraddress'>
          <UserAddress />
        </Route>

        <Route path='/error'>
          <Error />
        </Route>

        <Redirect to='404' />
      </Switch>
    </div>
  )
}
