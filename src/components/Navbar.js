import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <span className="font-weight-light">Sistema de&nbsp;</span>
            <span className="font-weight-bold">Productos</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
