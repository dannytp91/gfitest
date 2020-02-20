import * as React from 'react';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//@components
import Menu from '../Menu/Menu';

// @actions
import { logOutUser } from '../../containers/Login/actions';

//@images
import GFILogo from "../../assets/images/gfilogo.png";

//@styles
import "./style.scss";

interface IHeaderProps  {
    logOutUser: () => void
}

const Header: React.FunctionComponent<IHeaderProps> = ({
    logOutUser
}) => {
    return (
        <div className="header">
          <div className="header__logo">
           <img src={GFILogo} alt="Gfi"/>
          </div>
          <div className="header__menu">
            <Menu logOutUser={logOutUser} />
          </div>
        </div>
      );
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
        logOutUser
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Header);
