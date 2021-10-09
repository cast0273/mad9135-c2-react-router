import './home.css'

export default function Home (props) {
  function handleClick () {
    props.fetchData()
  }

  return (
    <div className='Home'>
      <h1>Home</h1>
      <h2>Click on the button to load user list data.</h2>
      <p onClick={handleClick}>Get my User List now!</p>
    </div>
  )
}
