import React from 'react';
import {useSelector} from 'react-redux';
import ItemList from './ItemList'


/**
 * Renders list of planets using ItemList component. Only renders 
 * planets found in state, planets the user has already viewed.
 * @returns {<ItemList/>}
 */
function PlanetList() {
  const items = useSelector(st => Object.values(st.planets).map(
    p => ({...p, url: `/planets/${p.id}`})
  ));
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;