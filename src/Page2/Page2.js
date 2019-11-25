import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Page2 extends Component {
  render() {

    
    return (
      <div className="page">
        <h1>PRODUCTOS</h1>
        <p>Hola, esto es productos</p>
      </div>
    );
  }
}

export default withRouter(Page2);