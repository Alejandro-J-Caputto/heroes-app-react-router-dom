import React, { useMemo } from 'react'
import {getHeroeByPublisher} from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroeList = ({publisher}) => {
  
  const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher])
   
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 animate_animated animate__fadeIn">
      {
        heroes.map(hero => {
         return <HeroCard key={hero.id} {...hero}/>
        })
      }
    </div>
  )
}
