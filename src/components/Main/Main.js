import './main.css'

import Home from '../Home/Home'
import UserList from '../UserList/UserList'
import UserAddress from '../UserAddress/UserAddress'
import Error from '../Error/Error'

import { Switch, Route, Redirect } from 'react-router-dom'

async function fetchData () {
  let params = {
    results: 16,
    seed: 'cast0273',
    format: 'json',
    nat: 'au,ca,nz,gb,us'
  }

  let url = `https://rbndomuser.me/api/?results=${params.results}&seed=${params.seed}&format=${params.format}&nat=${params.nat}`

  try {
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data)
  } catch (error) {
    console.error(`An error has occurred: ${error}`)
  }
}

export default function Main () {
  return (
    <div className='Main'>
      <Switch>
        <Route path='/' exact>
          <Home fetchData={fetchData} />
        </Route>

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
