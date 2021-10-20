import axios from "axios";
import { LOAD_PERSON } from "./types";

/**
 * Retreives people information from api, dispatches gotPerson action to insert person into state
 * 
 * @param {String} id 
 * @returns async function  to dispatch LOAD_PERSON
 */
function getPersonFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    let {
      name,
      gender,
      birth_year: birthYear,
      homeworld,
      films
    } = res.data;

    films = films.map(url => url.match(/\d+/)[0]);
    homeworld = homeworld.match(/\d+/)[0];

    const person = { id, name, gender, birthYear, homeworld, films };
    dispatch(gotPerson(person));
  };
}

/**
 * 
 * @param {String} person.id 
 * @param {String} person.name 
 * @param {String} person.gender 
 * @param {String} person.birthYear
 * @param {String} person.homeWorld id of homeworld
 * @param {Array} person.films array of id of films
 * @returns  action => {type: LOAD_PERSON, payload:person}
 */
function gotPerson(person) {
  return { type: LOAD_PERSON, payload: person };
}


export { getPersonFromAPI }