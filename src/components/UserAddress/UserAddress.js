import './userAddress.css'

export default function UserAddress ({ data }) {
  console.log(data)

  let dataCopy = new Array(data)

  function sortData (data) {
    return dataCopy.sort(function (a, b) {
      let lastNameA = a.name.last.toUpperCase()
      let lastNameB = b.name.last.toUpperCase()

      if (lastNameA < lastNameB) {
        return -1
      }
      if (lastNameA > lastNameB) {
        return 1
      }
      return 0
    })
  }

  function buildData (fromSortedData) {
    let frag = data.map(item => {
      return (
        <>
          <p>{`${item.name.first} ${item.name.last}`}</p>
          <p>{item.location.street.name}</p>
          <p>{`${item.location.city} ${item.location.state}`}</p>
          <p>{item.location.postcode}</p>
        </>
      )
    })
    return frag
  }

  return (
    <div className='UserAddress'>
      {dataCopy === undefined && <p>Loading...</p>}

      <div className='table'>
        <div className='labels'>
          <p>Name</p>
          <p>Street</p>
          <p>City, State</p>
          <p>Post Code</p>
        </div>

        <div className='populatedData'>
          {dataCopy && buildData(sortData(dataCopy))}
        </div>
      </div>
    </div>
  )
}
