import { loginEnumActions } from '../store/actions';

export interface LoginState {
    isLogged: boolean
}

interface loginBaseAction {
    type: loginEnumActions;
}

export interface Login_User extends loginBaseAction {
    type: loginEnumActions.LOGIN_USER
}

export interface Logout_User extends loginBaseAction {
    type: loginEnumActions.LOGOUT_USER
}

export type LoginActions = Login_User | Logout_User;
