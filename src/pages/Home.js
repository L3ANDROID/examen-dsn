import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import astronautsImage from '../images/productos.png';

export default class Home extends Component {
  state={
    user1: 'jfarfan',
    user2: 'leandrom',
    user3: 'admin'
  }
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">

              <h1>Products Management System</h1>
              <form>
                <div className="form-group">
                  <label for="email">Usuario:</label>
                  <input className="form-control" id="email"/>
                </div>
                <div className="form-group">
                  <label for="pwd">Password:</label>
                  <input type="password" className="form-control" id="pwd"/>
                </div>
              </form>
              <Link className="btn btn-primary" to="/badges">
                Ingresar
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
