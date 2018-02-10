import React, { Component } from 'react';
import Piece from './Piece';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [
        {
          magicNum: 1,
          chosen: '',
        },
        {
          magicNum: 1,
          chosen: '',
        },
        {
          magicNum: 1,
          chosen: '',
        },
        {
          magicNum: 1,
          chosen: '',
        },
        {
          magicNum: 1,
          chosen: '',
        },
        {
          magicNum: 1,
          chosen: '',
        },
        {
          magicNum: 1,
          chosen: '',
        },
        {
          magicNum: 1,
          chosen: '',
        }
      ]
    }
    this.makeMove = this.makeMove.bind(this);
    
  }
  makeMove(position) {
    const clickedSquare = this.state.boxes[position];
    const first = this.state.boxes.slice(0, position);
    const last = this.state.boxes.slice(position + 1);
    const newSquares = [
      ...first,
      {...clickedSquare, chosen: !clickedSquare.chosen},
      ...last
    ];
    this.setState({boxes: newSquares});

  }
  render() {
    const { boxes } = this.state;
    const GameGrid = boxes.map((box, index) => <Piece 
      key={index} 
      /*chosen={this.chosen} 
      magicNum={this.magicNum}*/
    />) 
    return (
      <div className="container">
        <h1>Tactical Tick's Toes</h1>
        <div className="row">
          { GameGrid }
        </div>
      </div>
    );
  }
}

export default App;
