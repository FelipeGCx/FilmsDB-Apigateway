const filmResolver = {
	Query: {
		getFilmById: async (_, { filmId }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmById(filmId);
			let saga = {
				id: 0,
				saga: ' ',
				svg: ' '
			};
			let category = {
				id: 0,
				category: ' ',
				svg: ' '
			};
			if (data.saga != 0) {
				saga = dataSources.sagaAPI.getSaga(data.saga);
			}
			if (data.category != 0) {
				category = dataSources.categoryAPI.getCategory(data.category);
			}
			const filme = {
				id: data.id,
				type: data.type,
				titleOG: data.titleOG,
				title: data.title,
				year: data.year,
				note: data.note,
				language: data.language,
				favorite: data.favorite,
				category: category,
				info: data.info,
				poster: data.poster,
				season: data.season,
				link: data.link,
				saga: saga
			};
			return filme;
		},
		getFilmByTitle: async (_, { filmTitle }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmByTitle(filmTitle);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilms: async (_, __, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilms();
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByType: async (_, { filmsType }, { dataSources }) => {
			let data = [];
			if (filmsType == 'all') {
				data = await dataSources.filmAPI.getFilms();
			} else {
				data = await dataSources.filmAPI.getFilmsByType(filmsType);
			}
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByYear: async (_, { filmsYear, filmsOrder }, { dataSources }) => {
			const data = await dataSources.filmAPI.getFilmsByYear(filmsYear, filmsOrder);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByNote: async (_, { filmsNote, filmsOrder }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmsByNote(filmsNote, filmsOrder);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByCategory: async (_, { filmsCategory }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmsByCategory(filmsCategory);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByLanguage: async (_, { filmsLanguage }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmsByLanguage(filmsLanguage);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByFavorite: async (_, { filmsFavorite }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmsByFavorite(filmsFavorite);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsBySaga: async (_, { filmsSaga }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmsBySaga(filmsSaga);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByTypeAndYear: async (_, { filmsType, filmsYear, filmsOrder }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmsByTypeAndYear(filmsType, filmsYear, filmsOrder);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByTypeAndNote: async (_, { filmsType, filmsNote, filmsOrder }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmsByTypeAndNote(filmsType, filmsNote, filmsOrder);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByTypeAndCategory: async (_, { filmsType, filmsCategory }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmsByTypeAndCategory(filmsType, filmsCategory);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByTypeAndLanguage: async (_, { filmsType, filmsLanguage }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmsByTypeAndLanguage(filmsType, filmsLanguage);
			let dataFinal = [];

			for (let index = 0; index < data.length; index++) {
				const film = data[index];
				let saga = {
					id: 0,
					saga: ' ',
					svg: ' '
				};
				let category = {
					id: 0,
					category: ' ',
					svg: ' '
				};
				if (film.saga != 0) {
					saga = dataSources.sagaAPI.getSaga(film.saga);
				}
				if (film.category != 0) {
					category = dataSources.categoryAPI.getCategory(film.category);
				}
				const filme = {
					id: film.id,
					type: film.type,
					titleOG: film.titleOG,
					title: film.title,
					year: film.year,
					note: film.note,
					language: film.language,
					favorite: film.favorite,
					category: category,
					info: film.info,
					poster: film.poster,
					season: film.season,
					link: film.link,
					saga: saga
				};
				dataFinal.push(filme);
			}
			return dataFinal;
		},
		getFilmsByTypeAndFavorite: async (_, { filmsType, filmsFavorite }, { dataSources }) => {
			let data = await dataSources.filmAPI.getFilmsByTypeAndFavorite(filmsType, filmsFavorite);
		}
	},
	Mutation: {
		createFilm: (_, { filmInput }, { dataSources }) => {
			const film = {
				type: filmInput.type,
				titleOG: filmInput.titleOG,
				title: filmInput.title,
				year: filmInput.year,
				note: filmInput.note,
				language: filmInput.language,
				favorite: filmInput.favorite,
				category: filmInput.category,
				info: filmInput.info,
				poster: filmInput.poster,
				season: filmInput.season,
				link: filmInput.link,
				saga: filmInput.saga
			};
			return dataSources.filmAPI.createFilm(film);
		},
		createFilms: (_, { filmsInput }, { dataSources }) => {
			return dataSources.filmAPI.createFilms(filmsInput);
		},
		updateFilm: (_, { filmId, filmInput }, { dataSources }) => {
			const film = {
				type: filmInput.type || null,
				titleOG: filmInput.titleOG || null,
				title: filmInput.title || null,
				year: filmInput.year || null,
				note: filmInput.note || null,
				language: filmInput.language || null,
				favorite: filmInput.favorite || null,
				category: filmInput.category || null,
				info: filmInput.info || null,
				poster: filmInput.poster || null,
				season: filmInput.season || null,
				link: filmInput.link || null,
				saga: filmInput.saga || null
			};
			return dataSources.filmAPI.updateFilm(filmId, film);
		},
		deleteFilm: (_, { filmId }, { dataSources }) => {
			return dataSources.filmAPI.deleteFilm(filmId);
		}
	}
};
module.exports = filmResolver;
