import './loading.css'

import { useEffect } from 'react'

export default function Loading ({ loadingState }) {
  useEffect(() => {
    console.log(`loading has changed to ${loadingState}`)
  }, [loadingState])

  return (
    <span className={`Loading ${loadingState ? 'active' : 'notActive'}`}>
      <div class='loadingBar'>
        <div class='outerContainer'>
          <div class='innerContainer'>
            <span class='firstBar'></span>
            <span class='secondBar'></span>
            <span class='thirdBar'></span>
            <span class='fourthBar'></span>
          </div>
        </div>
      </div>
    </span>
  )
}
