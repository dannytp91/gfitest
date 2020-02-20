import {
    movieEnumActions
} from '../store/actions';

export interface MovieItem {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface movieBaseAction {
    type: movieEnumActions;
}

export interface MovieRating {
    Source: string;
    Value: string;
}

export interface MovieInfo {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: MovieRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    Production: string;
}

export interface MovieState {
    isFetching: boolean;
    title: string;
    movieList: MovieItem[];
    movieInfo: MovieInfo;
    favoriteMovies: MovieItem[];
    page: number;
}

export interface GET_FAVORITES_MOVIES_ACTION extends movieBaseAction {
    type: movieEnumActions.GET_FAVORITES_MOVIES;
}
export interface SEARCH_MOVIE_REQUEST_ACTION extends movieBaseAction {
    type: movieEnumActions.SEARCH_MOVIE_REQUEST;
    data: string;
}

export interface SEARCH_MOVIE_SUCCESS_ACTION extends movieBaseAction {
    type: movieEnumActions.SEARCH_MOVIE_SUCCESS;
    data: MovieItem[];
}

export interface SEARCH_MOVIE_CHANGE_PAGE_REQUEST_ACTION extends movieBaseAction {
    type: movieEnumActions.SEARCH_MOVIE_CHANGE_PAGE_REQUEST;
    page: number;
}

export interface SEARCH_MOVIE_CHANGE_PAGE_SUCCESS_ACTION extends movieBaseAction {
    type: movieEnumActions.SEARCH_MOVIE_CHANGE_PAGE_SUCCESS;
    data: MovieItem[];
}

export interface SEARCH_MOVIE_DETAIL_REQUEST_ACTION extends movieBaseAction {
    type: movieEnumActions.SEARCH_MOVIE_DETAIL_REQUEST;
}

export interface SEARCH_MOVIE_DETAIL_SUCCESS_ACTION extends movieBaseAction {
    type: movieEnumActions.SEARCH_MOVIE_DETAIL_SUCCESS;
    movie: MovieInfo;
}

export interface ADD_MOVIE_FAVORITE_CATEGORY_ACTION extends movieBaseAction {
    type: movieEnumActions.ADD_MOVIE_FAVORITE_CATEGORY;
    movie: MovieItem;
}

export type MovieActions =
    | SEARCH_MOVIE_REQUEST_ACTION
    | SEARCH_MOVIE_SUCCESS_ACTION
    | SEARCH_MOVIE_CHANGE_PAGE_REQUEST_ACTION
    | SEARCH_MOVIE_CHANGE_PAGE_SUCCESS_ACTION
    | SEARCH_MOVIE_DETAIL_REQUEST_ACTION
    | SEARCH_MOVIE_DETAIL_SUCCESS_ACTION
    | ADD_MOVIE_FAVORITE_CATEGORY_ACTION
    | GET_FAVORITES_MOVIES_ACTION
