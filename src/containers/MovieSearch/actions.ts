
import axios from "axios";
import { ThunkAction } from "redux-thunk";

import {
    movieEnumActions
} from './../../store/actions';
import { MovieState, MovieActions, MovieItem, MovieInfo } from '../../interfaces/MovieTypes';

const url = "https://www.omdbapi.com/?apikey=1b33391a";
type Effect = ThunkAction<any, MovieState, any, MovieActions>;

const searchMovieRequest = (title: string): MovieActions => ({
    type: movieEnumActions.SEARCH_MOVIE_REQUEST,
    data: title
});

const searchMovieSuccess = (movieList: MovieItem[]): MovieActions => ({
    type: movieEnumActions.SEARCH_MOVIE_SUCCESS,
    data: movieList
});

const getMovieWholeInfoRequest = (): MovieActions => ({
    type: movieEnumActions.SEARCH_MOVIE_DETAIL_REQUEST
});

const getMovieWholeInfoSuccess = (movie: MovieInfo): MovieActions => ({
    type: movieEnumActions.SEARCH_MOVIE_DETAIL_SUCCESS,
    movie
});

const changePageRequest = (currentPage: number): MovieActions => ({
    type: movieEnumActions.SEARCH_MOVIE_CHANGE_PAGE_REQUEST,
    page: currentPage
});

const changePageSuccess = (movies: MovieItem[]): MovieActions => ({
    type: movieEnumActions.SEARCH_MOVIE_CHANGE_PAGE_SUCCESS,
    data: movies
});

export const addMovieFavorite = (movie: MovieItem): MovieActions => ({
    type: movieEnumActions.ADD_MOVIE_FAVORITE_CATEGORY,
    movie
});

export const getFavoritesMovies = (): MovieActions => ({
    type: movieEnumActions.GET_FAVORITES_MOVIES
});

export const searchMovie = (title: string): Effect => (dispatch) => {
    dispatch(searchMovieRequest(title));
    return axios.get(`${url}&s=${title}`)
        .then((response) => {
            dispatch(searchMovieSuccess(response.data.Search as MovieItem[]))
        });
}

export const getAllMovieInfo = (imdbID: string, addFavoriteMovie: boolean = false): Effect =>
    (dispatch) => {
        dispatch(getMovieWholeInfoRequest());
        return axios.get(`${url}&i=${imdbID}`)
            .then((response) => {
                const movieInfo: MovieInfo = response.data as MovieInfo;
                dispatch(getMovieWholeInfoSuccess(movieInfo));
                addFavoriteMovie ? dispatch(addMovieFavorite(movieInfo)) : null;
            });
}


export const changePage = (page: number): Effect => (dispatch, getState) => {
    const { title } = getState();
    dispatch(changePageRequest(page));
    return axios.get(`${url}&s=${title}&page=${page}`)
        .then((response) => {
            dispatch(changePageSuccess(response.data.Search as MovieItem[]));
        });
}
