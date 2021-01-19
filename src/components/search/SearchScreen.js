import React, { useMemo } from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroesData'
import { useForm } from '../../helpers/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';

export const SearchScreen = ({history}) => {
  

  const location = useLocation();

  const { q = '' } =queryString.parse(location.search)


  const [findHero, handleInputChange] = useForm({
    search: q
  })
  const {search} = findHero
  
   
   const results = useMemo(() => heroes.filter(hero => hero.superhero === search), [q])

  const handleSubmit = (e) => {
    e.preventDefault();    
    history.push(`?q=${search}`);

  }



  return (
    <div>
      <h1>SearchScreen</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr/>
          <form onSubmit={handleSubmit} className='form-group'>
            <input 
            onChange={handleInputChange}
            className="form-control"
            name="search"
            autoComplete='off'
            value={search}
            type="text"
            />
          <button 
          className="btn btn-warning"
          type="submit">
            FIND HERO
          </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {(q !== '' && results.length === 0) && 
          <div className="alert alert-warning">
            There is not a hero with the provided name
          </div>}
          {
            results.map(heroe => 
              <HeroCard key={heroe.id} {...heroe} />
              )
          }
        </div>
      </div>
    </div>
  )
}
