const { gql } = require('apollo-server');
const filmTypeDefs = gql`
	type CategoryDetail {
		id: Int!
		category: String!
		svg: String!
	}

	type SagaDetail {
		id: Int!
		saga: String!
		svg: String!
	}

	type FilmDetail {
		id: Int!
		type: String!
		titleOG: String!
		title: String!
		year: Int!
		note: Float!
		language: Boolean!
		favorite: Boolean!
		category: CategoryDetail!
		info: String!
		poster: String!
		season: Int!
		link: String!
		saga: SagaDetail!
	}

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

	type Mutation {
		createFilm(filmInput: FilmInput): FilmDetail!
		createFilms(filmsInput: [FilmInput]): String!
		updateFilm(filmId: Int!, filmInput: FilmInputUpdate): FilmDetail!
		deleteFilm(filmId: Int!): String!
	}

	type Query {
		getFilmById(filmId: Int!): FilmDetail!
		getFilmByTitle(filmTitle: String): [FilmDetail!]
		getFilms: [FilmDetail!]
		getFilmsByType(filmsType: String): [FilmDetail!]
		getFilmsByYear(filmsYear: Int, filmsOrder: String): [FilmDetail!]
		getFilmsByNote(filmsNote: Float, filmsOrder: String): [FilmDetail!]
		getFilmsByCategory(filmsCategory: String): [FilmDetail!]
		getFilmsByLanguage(filmsLanguage: Boolean): [FilmDetail!]
		getFilmsByFavorite(filmsFavorite: Boolean): [FilmDetail!]
		getFilmsBySaga(filmsSaga: String): [FilmDetail!]
		getFilmsByTypeAndYear(filmsType: String, filmsYear: Int, filmsOrder: String): [FilmDetail!]
		getFilmsByTypeAndNote(filmsType: String, filmsNote: Float, filmsOrder: String): [FilmDetail!]
		getFilmsByTypeAndCategory(filmsType: String, filmsCategory: Int): [FilmDetail!]
		getFilmsByTypeAndLanguage(filmsType: String, filmsLanguage: Boolean): [FilmDetail!]
		getFilmsByTypeAndFavorite(filmsType: String, filmsFavorite: Boolean): [FilmDetail!]
	}
`;
module.exports = filmTypeDefs;
