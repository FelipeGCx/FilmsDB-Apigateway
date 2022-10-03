const { gql } = require("apollo-server");
const filmTypeDefs = gql`
  input FilmInput {
    type: String!
    titleOG: String!
    title: String!
    year: Int!
    note: Float!
    language: Boolean!
    favorite: Boolean!
    category: Int!
    info: String!
    poster: String!
    season: Int!
    link: String!
    saga: Int!
  }

  input FilmInputUpdate {
    type: String
    titleOG: String
    title: String
    year: Int
    note: Float
    language: Boolean
    favorite: Boolean
    category: Int
    info: String
    poster: String
    season: Int
    link: String
    saga: Int
  }

  type CategoryIDetail {
    id: Int!
    category: String!
    svg: String!
  }

  type SagaIDetail {
    id: Int!
    saga: String!
    svg: String!
  }
  type Page {
    totalItems: Int
    size: Int
    totalPages: Int
    currentPage: Int
  }

  type FilmData {
    id: Int
    type: String
    titleOG: String
    title: String
    year: Int
    note: Float
    language: Boolean
    favorite: Boolean
    category: CategoryIDetail
    info: String
    poster: String
    season: Int
    link: String
    saga: SagaIDetail
  }
  type FilmDetail {
    data: FilmData
    error: Boolean
  }
  type FilmTDetail{
    data: [FilmData]
    error: Boolean
  }

  type FilmsDetail {
    data: [FilmData]
    page: Page
    error: Boolean
  }
  type MessageDetail {
    message: String
    error: Boolean
  }

  type ChartsData{
    type: String
    elements: Int
  }

  type ChartsDetail {
    data: [ChartsData]
    error: Boolean
  }

  type Mutation {
    createFilm(filmInput: FilmInput): FilmDetail!
    createFilms(filmsInput: [FilmInput]): MessageDetail!
    updateFilm(filmId: Int!, filmInput: FilmInputUpdate): FilmDetail!
    deleteFilm(filmId: Int!): MessageDetail!
  }

  type Query {
    getFilmById(filmId: Int!): FilmDetail!
    getFilmByTitle(filmTitle: String): FilmTDetail!
    getFilms(page: Int): FilmsDetail!
    getFilmsByType(filmsType: String, filmsYear:Int, filmsNote: String, page: Int): FilmsDetail!
    getCharts: ChartsDetail!
    getFilmsByYear(filmsYear: Int, filmsOrder: String,page: Int): FilmsDetail!
    getFilmsByNote(filmsNote: Float, filmsOrder: String,page: Int): FilmsDetail!
    getFilmsByCategory(filmsCategory: String,page: Int): FilmsDetail!
    getFilmsByLanguage(filmsLanguage: Boolean,page: Int): FilmsDetail!
    getFilmsByFavorite(filmsFavorite: Boolean,page: Int): FilmsDetail!
    getFilmsBySaga(filmsSaga: String,page: Int): FilmsDetail!
    getFilmsByTypeAndYear(
      filmsType: String
      filmsYear: Int
      filmsOrder: String,page: Int
    ): FilmsDetail!
    getFilmsByTypeAndNote(
      filmsType: String
      filmsNote: Float
      filmsOrder: String,page: Int
    ): FilmsDetail!
    getFilmsByTypeAndCategory(
      filmsType: String
      filmsCategory: Int,page: Int
    ): FilmsDetail!
    getFilmsByTypeAndLanguage(
      filmsType: String
      filmsLanguage: Boolean,page: Int
    ): FilmsDetail!
    getFilmsByTypeAndFavorite(
      filmsType: String
      filmsFavorite: Boolean,page: Int
    ): FilmsDetail!
  }
`;
module.exports = filmTypeDefs;
