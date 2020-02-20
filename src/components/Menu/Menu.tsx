import * as React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

//@styles
import "./style.scss";

interface IMenuProps {
    logOutUser: () => void
}

export default function Menu (props: IMenuProps) {
  return (
    <>
      <nav className="">
          <ul className="menu">
              <li><Link to="/">Peliculas</Link></li>
              <li>
                  <Link onClick={() => props.logOutUser()} to="/login">
                    <FiLogOut />
                  </Link>
              </li>
          </ul>
      </nav>
    </>
  );
}
