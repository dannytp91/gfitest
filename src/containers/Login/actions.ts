import { loginEnumActions } from '../../store/actions';
import { Login_User, Logout_User } from '../../interfaces/LoginTypes';

export const loginUser = () : Login_User =>({
    type: loginEnumActions.LOGIN_USER
});

export const logOutUser = (): Logout_User => ({
    type: loginEnumActions.LOGOUT_USER
});
