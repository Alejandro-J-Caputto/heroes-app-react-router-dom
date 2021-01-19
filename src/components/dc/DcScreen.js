import React from 'react'
import { HeroeList } from '../heroes/HeroeList'


const PUBLISHER_DC = 'DC Comics'

export const DcScreen = () => {
  return (
    <>
      <h1>DC Heroes</h1>
      <hr />
      <HeroeList publisher={PUBLISHER_DC}/>
    </>
  )
}
