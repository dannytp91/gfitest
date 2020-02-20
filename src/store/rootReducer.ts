import { combineReducers } from "redux";
import Login from "../containers/Login/reducer";
import Movie from "../containers/MovieSearch/reducer";

export default combineReducers({
    Login,
    Movie
});