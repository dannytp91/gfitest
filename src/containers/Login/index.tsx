import * as React from 'react';
import { Dispatch, bindActionCreators, AnyAction } from 'redux';
import { connect } from 'react-redux';

// @actions
import { loginUser } from "./actions";

// @interfaces
interface ILoginState {
    user: string,
    password: string,
    userError: string,
    passwordError: string
}

//@styles
import "./styles.scss";

class Login extends React.Component<ReturnType<typeof mapDispatchToProps>, ILoginState> {
    constructor(props: ReturnType<typeof mapDispatchToProps>) {
        super(props);
        this.state = {
            user: '',
            password: '',
            userError: '',
            passwordError: ''
        }

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChangeUserName(elem: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            user: elem.target.value,
            userError: ''
        });
    }

    onChangePassword(elem: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            password: elem.target.value,
            passwordError: ''
        });
    }

    onClick() {
        const { user, password } = this.state;
        const { loginUser } = this.props;

        if(!user || !password) {
            return this.setState({
                userError: !user ? "This field is Required": '',
                passwordError: !password ? "This field is Required" : ''
            });
        }

        loginUser();
    }

    public render() {
        const {
            user,
            password,
            userError,
            passwordError
        } = this.state;
        return (
            <div className="login">
                <div className="login__container">
                    <div className="login__company-logo">
                        <img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/2bae6e979f46caf29f09f623420d9e3a" alt="Gfi"/>
                    </div>
                    <div className="login__form vertical-form">
                        <div className="login__username">
                            <label htmlFor="username" className="label-form">Username</label>
                            <input
                                id="username"
                                onChange={((target) => this.onChangeUserName(target))}
                                type="text"
                                value={user}
                            />
                            <span className="login__user--error">{userError}</span>
                        </div>
                        <div className="login__password">
                            <label htmlFor="" className="label-form">Password</label>
                            <input
                                className="input-form"
                                id="password"
                                onChange={((target) => this.onChangePassword(target))}
                                type="password"
                                value={password}
                            />
                            <span className="login__password--error">{passwordError}</span>
                        </div>
                    </div>
                    <div className="login__submit">
                        <button
                            className="button login__submit--button"
                            onClick={this.onClick}
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      loginUser
    },
    dispatch
  );

export default  connect(null, mapDispatchToProps)(Login);
