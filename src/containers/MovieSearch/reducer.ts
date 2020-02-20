import { MovieItem } from './../../interfaces/MovieTypes';
import {
    movieEnumActions
} from './../../store/actions';
import { produce } from "immer";
import {
    MovieActions,
    MovieState
} from '../../interfaces/MovieTypes';
import LocalStorage from '../../utils/localStorage';

const localStorage: LocalStorage = new LocalStorage();
const favoritesMoviesKey = "favoritesMovie";

const initialState: MovieState = {
    isFetching: false,
    title: '',
    movieInfo: {
        Title: '',
        Year: '',
        Rated: '',
        Released: '',
        Runtime: '',
        Genre: '',
        Director: '',
        Writer: '',
        Actors: '',
        Plot: '',
        Language: '',
        Country: '',
        Awards: '',
        Poster: '',
        Ratings: [],
        Metascore: '',
        imdbRating: '',
        imdbVotes: '',
        imdbID: '',
        Type: '',
        DVD: '',
        Production: '',
    },
    movieList: [],
    favoriteMovies:[],
    page: 1
};


export default (state = initialState,  action: MovieActions) => {
    switch (action.type) {
        case movieEnumActions.SEARCH_MOVIE_REQUEST:
            return produce(state, (draft) => {
                draft.title = action.data;
                draft.isFetching = true
            });
        case movieEnumActions.SEARCH_MOVIE_SUCCESS:
            return produce(state, (draft) => {
                draft.movieList = action.data,
                draft.isFetching = false
            });
        case movieEnumActions.SEARCH_MOVIE_DETAIL_REQUEST:
            return produce(state, (draft) => {
                draft.isFetching = true
            });
        case movieEnumActions.SEARCH_MOVIE_DETAIL_SUCCESS:
            return produce(state, (draft) => {
                draft.isFetching = false;
                draft.movieInfo = action.movie
            });
        case movieEnumActions.ADD_MOVIE_FAVORITE_CATEGORY:
            let currentFavoritesMovies: MovieItem[] = []
            if (!localStorage.getItem(favoritesMoviesKey)) {
                currentFavoritesMovies.push(action.movie);
                localStorage.setItem(favoritesMoviesKey, JSON.stringify([action.movie]));
            } else {
                currentFavoritesMovies = JSON.parse(localStorage.getItem(favoritesMoviesKey));
                currentFavoritesMovies.push(action.movie);
                localStorage.setItem(favoritesMoviesKey, JSON.stringify(currentFavoritesMovies));
            }

            return produce(state, (draft) => {
                draft.favoriteMovies = currentFavoritesMovies
            });
        case movieEnumActions.GET_FAVORITES_MOVIES:
            let favoritesMovies: MovieItem[] = [];
            if (localStorage.getItem(favoritesMoviesKey)) {
                favoritesMovies = JSON.parse(localStorage.getItem(favoritesMoviesKey));
            }

            return produce(state, (draft) => {
                draft.favoriteMovies = favoritesMovies
            });

        default:
            return initialState;
    }
};
