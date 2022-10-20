const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");
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
  async getFilms(page) {
    return await this.get(`/films?page=${page}`);
  }
  async getFilmsByType(filmsType, filmsYear, filmsNote, page) {
    return await this.get(
      `/films/type=${filmsType}?year=${filmsYear}&note=${filmsNote}&page=${page}`
    );
  }
  async getCharts() {
    return await this.get(`/charts`);
  }
  async getFilmsByYear(filmsYear, filmsOrder, page) {
    return await this.get(
      `/films/year=${filmsYear}/order=${filmsOrder}?page=${page}`
    );
  }
  async getFilmsByNote(filmsNote, filmsOrder, page) {
    return await this.get(
      `/films/note=${filmsNote}/order=${filmsOrder}?page=${page}`
    );
  }
  async getFilmsByCategory(filmsCategory, page) {
    return await this.get(`/films/category=${filmsCategory}?page=${page}`);
  }
  async getFilmsByLanguage(filmsLanguage, page) {
    return await this.get(`/films/language=${filmsLanguage}?page=${page}`);
  }
  async getFilmsByFavorite(filmsFavorite, page) {
    return await this.get(`/films/favorite=${filmsFavorite}?page=${page}`);
  }
  async getFilmsBySaga(filmsSaga, page) {
    return await this.get(`/films/saga=${filmsSaga}?page=${page}`);
  }
  async getFilmsByTypeAndYear(filmsType, filmsYear, filmsOrder, page) {
    return await this.get(
      `/films/type=${filmsType}/year=${filmsYear}/order=${filmsOrder}?page=${page}`
    );
  }
  async getFilmsByTypeAndNote(filmsType, filmsNote, filmsOrder, page) {
    return await this.get(
      `/films/type=${filmsType}/note=${filmsNote}/order=${filmsOrder}?page=${page}`
    );
  }
  async getFilmsByTypeAndCategory(filmsType, filmsCategory, page) {
    return await this.get(
      `/films/type=${filmsType}/category=${filmsCategory}?page=${page}`
    );
  }
  async getFilmsByTypeAndLanguage(filmsType, filmsLanguage, page) {
    return await this.get(
      `/films/type=${filmsType}/language=${filmsLanguage}?page=${page}`
    );
  }
  async getFilmsByTypeAndFavorite(filmsType, filmsFavorite, page) {
    return await this.get(
      `/films/type=${filmsType}/favorite=${filmsFavorite}?page=${page}`
    );
  }
  async createFilm(film, tokenAccess) {
    return await this.post(`/create/film`, film, {
      headers: { Authorization: ` Bearer ${tokenAccess}` },
    });
  }
  async createFilms(films, tokenAccess) {
    return await this.post(`/create/films`, films, {
      headers: { Authorization: ` Bearer ${tokenAccess}` },
    });
  }
  async updateFilm(filmId, film, tokenAccess) {
    return await this.put(`/update/film/${filmId}`, film, {
      headers: { Authorization: ` Bearer ${tokenAccess}` },
    });
  }
  async deleteFilm(filmId, tokenAccess) {
    return await this.delete(`/delete/film/${filmId}`, null, {
      headers: { Authorization: ` Bearer ${tokenAccess}` },
    });
  }
}
module.exports = FilmAPI;
