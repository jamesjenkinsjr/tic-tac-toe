import React, { Component } from 'react';
import Piece from './Piece';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pieces: [
        {
          src: './letter-o.png',
          isSet: true
        },
        {
          src: './letter-x.png',
          isSet: true
        },
        {
          src: './letter-x.png',
          isSet: false
        }

      ]
    }

    
  }
  render() {
    return (
      <div className="container">
        <h1>Tactical Tick's Toes</h1>
        <div className="row">
         <Piece />
        </div>
      </div>
    );
  }
}

export default App;
