import * as React from 'react';
import { MdStar } from 'react-icons/md';
import { connect } from 'react-redux';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

// @actios
import { getAllMovieInfo } from "../MovieSearch/actions";

// @interfaces
import { MovieInfo } from '../../interfaces/MovieTypes';
import { AppState } from '../../interfaces/rootReducerModel';

interface IDispatchProps {
    getAllMovieInfo: (imdbID: string) => void,
}

interface IRouteInfo {
    imdbID: string;
}
interface IStateProps extends RouteComponentProps<IRouteInfo> {
    movieInfo: MovieInfo;
}

type Props = IStateProps & IDispatchProps;

// @styles
import "./styles.scss";

class Movie extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        const {
            match: { params: { imdbID } },
            getAllMovieInfo
        } = this.props;

        getAllMovieInfo(imdbID)
    }

    public render() {
        const { movieInfo: {
            Actors,
            Awards,
            Country,
            Director,
            imdbRating,
            imdbVotes,
            Language,
            Plot,
            Poster,
            Released,
            Runtime,
            Title,
            Writer
        } } = this.props;
        return (
            <div className="movie">
                <section className="movie__header">
                    <div className="movie__title">
                        <h2>{Title}</h2>
                    </div>
                    <div className="movie__imdb-rating">
                        <div className="movie__rating-star">
                          <MdStar className="movie__rating-star--icon" />
                        </div>
                        <div className="movie__rating-score">
                            <div className="movie__current-rating">
                              <span className="movie__rating-score--current-rating">{imdbRating}</span>
                              <span className="movie__rating-score--max-score">/10</span>
                            </div>
                            <div className="movie__rating-votes">
                                {imdbVotes}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="movie__info">
                    <div className="movie__poster">
                      <img src={Poster} alt={Title}/>
                    </div>

                    <section className="movie__detail">
                      <p className="movie__plot">
                          <label className="movie__item-label">Plot: </label>
                          <span>{Plot}</span>
                      </p>
                      <p className="movie__released">
                          <label className="movie__item-label">Released: </label>
                          <span>{Released}</span>
                      </p>
                      <p className="movie__runtime">
                          <label className="movie__item-label">Runtime: </label>
                          <span>{Runtime}</span>
                      </p>
                      <p className="movie__director">
                        <label className="movie__item-label">Director: </label>
                        <span>{Director}</span>
                      </p>
                      <p className="movie__writer">
                          <label className="movie__item-label">Writer: </label>
                          <span>{Writer}</span>
                      </p>
                      <p className="movie__actors">
                          <label className="movie__item-label">Actors: </label>
                          <span>{Actors}</span>
                      </p>
                      <p className="movie__language">
                          <label className="movie__item-label">Language: </label>
                          <span>{Language}</span>
                      </p>
                      <p className="movie__country">
                          <label className="movie__item-label">Country: </label>
                          <span>{Country}</span>
                      </p>
                      <p className="movie__award">
                          <label className="movie__item-label">Awards: </label>
                          <span>{Awards}</span>
                      </p>
                    </section>
                </section>
            </div>
        );
    }

};

const mapStateToProps = (state: AppState) => {
    return {
        movieInfo: state.Movie.movieInfo
    };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    { getAllMovieInfo },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
