import * as React from 'react';
import { Dispatch, bindActionCreators, AnyAction } from 'redux';
import { AppState } from '../../interfaces/rootReducerModel';
import { connect } from 'react-redux';
import { FaSearch } from "react-icons/fa";

// @components
import MovieItemList from '../../components/MovieItem';

// @actions
import {
    addMovieFavorite,
    searchMovie,
    getFavoritesMovies
} from "./actions";

// @styles
import "./styles.scss";

// @interfaces
import { MovieItem } from '../../interfaces/MovieTypes';

interface IDispatchProps {
    addMovieFavorite: (movie: MovieItem) => object;
    getFavoritesMovies: () => void;
    searchMovie: (title: string) => void;
}

interface IStateProps {
    favoritesMovies: MovieItem[],
    isFetching: boolean;
    movieList: MovieItem[];
    title: string;
}

interface IState {
    movieTitle: string;
}

type Props = IDispatchProps & IStateProps;

class MovieSearch extends React.Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        this.onClickSearchMovies = this.onClickSearchMovies.bind(this);
        this.onClickAddMovie = this.onClickAddMovie.bind(this);
        this.state = {
            movieTitle: this.props.title
        }
    }

    componentDidMount() {
        this.props.getFavoritesMovies();
    }

    onClickSearchMovies() {
        const { searchMovie } = this.props;
        searchMovie(this.state.movieTitle);
    }

    onClickAddMovie(movie: MovieItem) {
        const { addMovieFavorite } = this.props;
        addMovieFavorite(movie);
    }

    onChangeSearch(movieTitle: string): void {
        this.setState({
            movieTitle
        });
    }

    renderMovieList() {
        const { movieList, favoritesMovies } = this.props;
        return movieList.map((movie: MovieItem) => {
            const searchFavorite: MovieItem[] = favoritesMovies.filter(favoriteMovie => favoriteMovie.imdbID === movie.imdbID);
            const isFavorite: boolean = !!searchFavorite.length;
            return (
                <MovieItemList
                    addMovie={this.onClickAddMovie}
                    imdbID={movie.imdbID}
                    isFavorite={isFavorite}
                    key={movie.imdbID}
                    poster={movie.Poster}
                    title={movie.Title}
                    type={movie.Type}
                    year={movie.Year}
                />
            );
        });
    }

    public render() {
        return (
            <div className="movies">
                <div className="movies__search-form horizontal-form">
                    <div className="search-form__title">
                        <input
                            className="search-form__title-input"
                            id="titleMovie"
                            onChange={(elem) => this.onChangeSearch(elem.target.value)}
                            placeholder="Search"
                            value={this.state.movieTitle}
                            type="text"
                        />
                    </div>
                    <div className="search-form__buttons">
                        <button
                            disabled={this.props.isFetching}
                            className="search-form__submit"
                            onClick={this.onClickSearchMovies}
                        >
                            <FaSearch />
                        </button>
                    </div>
                </div>

                <div className="movies__list">
                    {this.renderMovieList()}
                </div>
            </div>
        );
    }
}

const mapState2Props = (state: AppState) => {
    return {
        favoritesMovies: state.Movie.favoriteMovies,
        isFetching: state.Movie.isFetching,
        movieList: state.Movie.movieList,
        title: state.Movie.title
    };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
        searchMovie,
        addMovieFavorite,
        getFavoritesMovies
    },
    dispatch
);

export default  connect(mapState2Props, mapDispatchToProps)(MovieSearch);
