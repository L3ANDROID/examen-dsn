import React from 'react';

import './styles/Badge.css';
import Gravatar from '../components/Gravatar';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <h2>PRODUCTO</h2>
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Precio: S/.{this.props.email}</h3><br/><h3>Cantidad:&nbsp;{this.props.jobTitle}</h3>
          <div>Stock:&nbsp;{this.props.twitter}</div>
        </div>

      </div>
    );
  }
}

export default Badge;
