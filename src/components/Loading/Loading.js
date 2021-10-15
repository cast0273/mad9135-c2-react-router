import './loading.css'

import { useEffect } from 'react'

export default function Loading ({ loadingState }) {
  useEffect(() => {
    console.log(`loading has changed to ${loadingState}`)
  }, [loadingState])

  return (
    <span className={`Loading ${loadingState ? 'active' : 'notActive'}`}>
      <div>LOADING</div>
    </span>
  )
}
