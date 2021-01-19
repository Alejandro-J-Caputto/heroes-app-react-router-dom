import React from 'react'
import {HeroeList} from '../heroes/HeroeList'
const PUBLISHER_MARVEL = 'Marvel Comics' 
export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel Heroes</h1>
      <hr />
      <HeroeList publisher={PUBLISHER_MARVEL}/>
    </div>
  )
}
