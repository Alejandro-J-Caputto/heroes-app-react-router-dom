import {heroes} from '../data/heroesData';

export const getHeroeByPublisher = ( publisher ) => {

  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if(!validPublishers.includes( publisher )) {
    throw new Error(`Publisher ${publisher} doesnt exist`)
  }

  return heroes.filter(hero => hero.publisher === publisher);

}