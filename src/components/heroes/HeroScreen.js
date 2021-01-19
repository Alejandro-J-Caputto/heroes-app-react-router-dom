import React, {useMemo} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {
  
  const {heroId} = useParams();
  console.log(heroId)
  const heroeById = useMemo(()=> getHeroesById(heroId), [heroId]) ;

  if(!heroeById) {
    return <Redirect to="/" />
  }

  
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters} = heroeById;
    
    const handleReturn = () => {
      // (publisher === 'DC Comics') ? history.push('/dc') : history.push('/marvel')
      history.goBack()
    }
  return (
    <div className= "row mt-5">
      <div className="col-4">
        <img src={`${process.env.PUBLIC_URL}/assets/${heroId}.jpg`} className="img-thumbnail" alt={superhero}/>
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
          <li className="list-group-item"><b>First Appareance:</b> {first_appearance}</li>
        </ul>
        <h5 className="mt-2">
          {characters}
        </h5>
        <button 
        onClick={handleReturn}
        className="btn btn-outline-info"> return </button>
      </div>
      
      
    </div>
  )
}
