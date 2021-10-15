import './userList.css'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function UserList ({ fetchData, data }) {
  //
  useEffect(() => {
    // console.log('useEffect: fetchData() was called.')
    fetchData()
  }, [])

  useEffect(() => {}, [data])

  return (
    <div className='UserList'>
      {data === 0 && <p>Loading...</p>}
      <div className='user-list'>
        {data &&
          data.map((item, index) => (
            <div key={index} className='user'>
              <div className='wrapper'>
                <img src={item.picture.medium} alt='User thumbnail' />
                <div className='userDetails'>
                  <p>{`${item.name.first} ${item.name.last}`}</p>
                  <p>{item.email}</p>
                  <p>{item.cell}</p>
                </div>
              </div>
              <Link to={{ pathname: `/userList/${index}`, state: { item } }}>
                View Details
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}
