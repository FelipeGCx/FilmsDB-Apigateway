function createResponse(array, sagas, categories) {
  let dataResponse = [];
  array.data.forEach((film) => {
    let saga = {
      id: 0,
      saga: " ",
      svg: " ",
    };
    let category = {
      id: 0,
      category: " ",
      svg: " ",
    };
    if (film.saga != 0) {
      sagas.data.forEach((s) => {
        if (s.id == film.saga) {
          saga = s;
        }
      });
    }
    if (film.category != 0) {
      categories.data.forEach((c) => {
        if (c.id == film.category) {
          category = c;
        }
      });
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
      saga: saga,
    };
    dataResponse.push(filme);
  });
  return dataResponse;
}

const filmResolver = {
  Query: {
    getFilmById: async (_, { filmId }, { dataSources }) => {
      let result = await dataSources.filmAPI.getFilmById(filmId);
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmByTitle: async (_, { filmTitle }, { dataSources }) => {
      let result = await dataSources.filmAPI.getFilmByTitle(filmTitle);
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilms: async (_, { page }, { dataSources }) => {
      let result = await dataSources.filmAPI.getFilms(page);
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsByType: async (
      _,
      { filmsType, filmsYear, filmsNote, page },
      { dataSources }
    ) => {
      result = await dataSources.filmAPI.getFilmsByType(
        filmsType,
        filmsYear,
        filmsNote,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getCharts: async (_, __, { dataSources }) => {
      return await dataSources.filmAPI.getCharts();
    },
    getFilmsByYear: async (
      _,
      { filmsYear, filmsOrder, page },
      { dataSources }
    ) => {
      let result = await dataSources.filmAPI.getFilmsByYear(
        filmsYear,
        filmsOrder,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsByNote: async (
      _,
      { filmsNote, filmsOrder, page },
      { dataSources }
    ) => {
      let result = await dataSources.filmAPI.getFilmsByNote(
        filmsNote,
        filmsOrder,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsByCategory: async (_, { filmsCategory, page }, { dataSources }) => {
      let result = await dataSources.filmAPI.getFilmsByCategory(
        filmsCategory,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsByLanguage: async (_, { filmsLanguage, page }, { dataSources }) => {
      let result = await dataSources.filmAPI.getFilmsByLanguage(
        filmsLanguage,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsByFavorite: async (_, { filmsFavorite, page }, { dataSources }) => {
      let result = await dataSources.filmAPI.getFilmsByFavorite(
        filmsFavorite,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsBySaga: async (_, { filmsSaga, page }, { dataSources }) => {
      let result = await dataSources.filmAPI.getFilmsBySaga(filmsSaga, page);
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsByTypeAndYear: async (
      _,
      { filmsType, filmsYear, filmsOrder, page },
      { dataSources }
    ) => {
      let result = await dataSources.filmAPI.getFilmsByTypeAndYear(
        filmsType,
        filmsYear,
        filmsOrder,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsByTypeAndNote: async (
      _,
      { filmsType, filmsNote, filmsOrder, page },
      { dataSources }
    ) => {
      let result = await dataSources.filmAPI.getFilmsByTypeAndNote(
        filmsType,
        filmsNote,
        filmsOrder,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsByTypeAndCategory: async (
      _,
      { filmsType, filmsCategory, page },
      { dataSources }
    ) => {
      let result = await dataSources.filmAPI.getFilmsByTypeAndCategory(
        filmsType,
        filmsCategory,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsByTypeAndLanguage: async (
      _,
      { filmsType, filmsLanguage, page },
      { dataSources }
    ) => {
      let result = await dataSources.filmAPI.getFilmsByTypeAndLanguage(
        filmsType,
        filmsLanguage,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
    getFilmsByTypeAndFavorite: async (
      _,
      { filmsType, filmsFavorite, page },
      { dataSources }
    ) => {
      let result = await dataSources.filmAPI.getFilmsByTypeAndFavorite(
        filmsType,
        filmsFavorite,
        page
      );
      let sagas = await dataSources.sagaAPI.getSagas();
      let categories = await dataSources.categoryAPI.getCategories();
      result.data = createResponse(result, sagas, categories);
      return result;
    },
  },
  Mutation: {
    createFilm: (_, { filmInput }, { dataSources, user }) => {
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
        saga: filmInput.saga,
      };
      return dataSources.filmAPI.createFilm(film,user.accessToken);
    },
    createFilms: (_, { filmsInput }, { dataSources }) => {
      return dataSources.filmAPI.createFilms(filmsInput);
    },
    updateFilm: (_, { filmId, filmInput }, { dataSources, user }) => {
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
        saga: filmInput.saga || null,
      };
      return dataSources.filmAPI.updateFilm(filmId, film, user.accessToken);
    },
    deleteFilm: (_, { filmId }, { dataSources ,user}) => {
      return dataSources.filmAPI.deleteFilm(filmId, user.accessToken);
    },
  },
};
module.exports = filmResolver;
