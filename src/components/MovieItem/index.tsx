import * as React from 'react';
import { FaPlus, FaCheck } from "react-icons/fa";
import { MovieItem } from '../../interfaces/MovieTypes';

// @styles
import "./styles.scss";
import { Link } from 'react-router-dom';

interface IMovieItem {
    addMovie: (movie: MovieItem) => void;
    imdbID: string;
    isFavorite: boolean;
    poster: string;
    title: string;
    type: string;
    year: string;
}

const MovieItem: React.FunctionComponent<IMovieItem> = (props) => {
  const movieItem:MovieItem = {
      imdbID: props.imdbID,
      Poster: props.poster,
      Title: props.title,
      Type: props.type,
      Year: props.year
  };
  const bookMark: React.ReactNode = !props.isFavorite
    ? (
        <div className="movie-item__add-favorite" onClick={() => props.addMovie(movieItem)}>
            <FaPlus className="movie-item__add-favorite--plus-icon" />
        </div>
    )
    : (
        <div className="movie-item__add-favorite">
            <FaCheck className="movie-item__add-favorite--check-icon" />
        </div>
    );

  return (
      <div className="movie-item">
          {bookMark}
        <div className="movie-item__poster">
            <img src={props.poster} alt={props.title}/>
        </div>
        <div className="movie-item__info">
            <p className="movie-item__year-release">{props.year}</p>
            <p className="movie-item__title">
                <Link to={`/movie/${props.imdbID}`}>{props.title}</Link>
            </p>
        </div>
      </div>
  );
};

export default MovieItem;
