import axios from 'axios';
import { LOAD_FILM } from "./types";

/**
 * Retreives film information from api, dispatches gotFilm action to insert film into state
 * 
 * @param {String} id 
 * @returns async function  to dispatch LOAD_FILM
 */
function getFilmFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets
    } = res.data;

    characters = characters.map(url => url.match(/\d+/)[0]);
    planets = planets.map(url => url.match(/\d+/)[0]);

    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
}

/**
 * 
 * @param {String} film.id film id provided by api
 * @param {String} film.name name of film
 * @param {String} film.director director of film
 * @param {String} film.openingCrawl opening text of film
 * @param {Array} film.characters array of ids of characters in film
 * @param {Array} film.planets array of ids of planets in film
 * @returns action=> {type: LOAD_FILM, payload:film}
 */
function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}


export { getFilmFromAPI }