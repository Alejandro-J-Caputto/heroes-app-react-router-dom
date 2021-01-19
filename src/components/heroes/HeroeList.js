import React from 'react'
import {getHeroeByPublisher} from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroeList = ({publisher}) => {
 
  const heroes = getHeroeByPublisher(publisher)
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {
        heroes.map(hero => {
         return <HeroCard key={hero.id} {...hero}/>
        })
      }
    </div>
  )
}
