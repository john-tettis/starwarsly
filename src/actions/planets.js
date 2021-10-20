import axios from "axios";
import { LOAD_PLANET } from "./types";

/**
 * Retreives film information from api, dispatches gotPlanet action to insert Planet into state
 * 
 * @param {String} id 
 * @returns async function  to dispatch LOAD_PLANET
 */
function getPlanetFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    let {
      name,
      population,
      climate,
      residents,
      films
    } = res.data;

    residents = residents.map(url => url.match(/\d+/)[0]);
    films = films.map(url => url.match(/\d+/)[0]);

    const planet = { id, name, population, climate, residents, films };
    dispatch(gotPlanet(planet));
  };
}

/**
 * 
 * @param {String} planet.id
 * @param {String} planet.nane
 * @param {String} planet.population
 * @param {String} planet.climate
 * @param {String} planet.residents array of ids of people from planet
 * @param {String} planet.films array of ids of films including planet
 * @returns action => {type: LOAD_PLANET, payload:planet}
 */
function gotPlanet(planet) {
  return { type: LOAD_PLANET, payload: planet };
}


export { getPlanetFromAPI }