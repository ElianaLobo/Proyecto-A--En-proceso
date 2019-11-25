import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Page3 extends Component {
  render() {

    console.log('historia', this.props.history);
    console.log('locación', this.props.location);
    console.log('match', this.props.match);
    
    return (
      <div className="page">
        <h1>SERVICIOS</h1>
        <p>Holaa esto es Servicios</p>
      </div>
    );
  }
}

export default withRouter(Page3);