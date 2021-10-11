import './userList.css'

import { useEffect } from 'react'

export default function UserList ({ data }) {
  console.log(data)

  useEffect(() => {
    console.log('useEffect was called.')
  }, [data])

  return (
    <div className='UserList'>
      {data.length === 0 && <p>Loading...</p>}
      <div className='planet-list'>
        {data.map((item, index) => (
          <p key={index}>
            {/* <NavLink to={`/planets/${index + 1}`}>{item.name}</NavLink> */}
            <span>{item.name.first}</span>
          </p>
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
