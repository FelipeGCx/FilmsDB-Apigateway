const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class FilmAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = serverConfig.films_api_url;
	}
	async getFilmById(filmId) {
		return await this.get(`/film/id/${filmId}`);
	}
	async getFilmByTitle(filmTitle) {
		return await this.get(`/film/title/${filmTitle}`);
	}
	async getFilms() {
		return await this.get(`/films`);
	}
	async getFilmsByType(filmsType) {
		return await this.get(`/films/type=${filmsType}`);
	}
	async getFilmsByYear(filmsYear, filmsOrder) {
		return await this.get(`/films/year=${filmsYear}/order=${filmsOrder}`);
	}
	async getFilmsByNote(filmsNote, filmsOrder) {
		return await this.get(`/films/note=${filmsNote}/order=${filmsOrder}`);
	}
	async getFilmsByCategory(filmsCategory) {
		return await this.get(`/films/category=${filmsCategory}`);
	}
	async getFilmsByLanguage(filmsLanguage) {
		return await this.get(`/films/language=${filmsLanguage}`);
	}
	async getFilmsByFavorite(filmsFavorite) {
		return await this.get(`/films/favorite=${filmsFavorite}`);
	}
	async getFilmsBySaga(filmsSaga) {
		return await this.get(`/films/saga=${filmsSaga}`);
	}
	async getFilmsByTypeAndYear(filmsType, filmsYear, filmsOrder) {
		return await this.get(`/films/type=${filmsType}/year=${filmsYear}/order=${filmsOrder}`);
	}
	async getFilmsByTypeAndNote(filmsType, filmsNote, filmsOrder) {
		return await this.get(`/films/type=${filmsType}/note=${filmsNote}/order=${filmsOrder}`);
	}
	async getFilmsByTypeAndCategory(filmsType, filmsCategory) {
		return await this.get(`/films/type=${filmsType}/category=${filmsCategory}`);
	}
	async getFilmsByTypeAndLanguage(filmsType, filmsLanguage) {
		return await this.get(`/films/type=${filmsType}/language=${filmsLanguage}`);
	}
	async getFilmsByTypeAndFavorite(filmsType, filmsFavorite) {
		return await this.get(`/films/type=${filmsType}/favorite=${filmsFavorite}`);
	}
	async createFilm(film) {
		return await this.post(`/create/film`, film);
	}
	async createFilms(films) {
		return await this.post(`/create/films`, films);
	}
	async updateFilm(filmId, film) {
		return await this.put(`/update/film/${filmId}`, film);
	}
	async deleteFilm(filmId) {
		return await this.delete(`/delete/film/${filmId}`);
	}
}
module.exports = FilmAPI;
