import './main.css'

import Home from '../Home/Home'
import UserList from '../UserList/UserList'
import UserAddress from '../UserAddress/UserAddress'
import Error from '../Error/Error'

import { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export default function Main () {
  const [userList, setUserList] = useState([])

  async function fetchData () {
    //Every time we do a fetch, we choose the count of results returned to be between 16 and 32
    function getRandomNum () {
      return Math.floor(Math.random() * 17) + 16
    }

    //params object lets us easily change any desired parameter later on
    let params = {
      results: getRandomNum(),
      seed: 'cast0273',
      format: 'json',
      nat: 'au,ca,nz,gb,us'
    }

    let url = `https://randomuser.me/api/?results=${params.results}&seed=${params.seed}&format=${params.format}&nat=${params.nat}`

    try {
      let resp = await fetch(url)
      let data = await resp.json()

      console.log(data)
      setUserList(data.results)
    } catch (error) {
      console.error(`An error has occurred: ${error}`)
    }
  }

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
