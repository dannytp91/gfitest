import { produce } from "immer";
import { LoginState, LoginActions } from '../../interfaces/LoginTypes';
import { loginEnumActions } from '../../store/actions';
import SessionStorage from "../../utils/sessionStorage";

const initialState: LoginState = {
    isLogged: false
};
const localStoragKey = 'isLogged';

const sessionStorage: SessionStorage = new SessionStorage();

export default (state = initialState,  action: LoginActions) => {
    switch (action.type) {
        case loginEnumActions.LOGIN_USER:
            sessionStorage.setItem(localStoragKey, 'true');
            return produce(state, draft =>{
                draft.isLogged = true
            });
        case loginEnumActions.LOGOUT_USER:
            sessionStorage.setItem(localStoragKey, 'false');
            return produce(state, draft =>{
                draft.isLogged = false
            });;
        default:
            if (sessionStorage.getItem(localStoragKey)) {
                return {
                    isLogged: JSON.parse(sessionStorage.getItem(localStoragKey))
                }
            }
            return initialState
    }
};
