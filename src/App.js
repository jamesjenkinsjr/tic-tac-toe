import React, { Component } from 'react';
import Piece from './Piece';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [
        {
          magicNum: 1,
          chosen: false,
          src:'./empty.png'
        },
        {
          magicNum: 1,
          chosen: false,
          src: './empty.png'
        },
        {
          magicNum: 1,
          chosen: false,
          src: './empty.png'
        },
        {
          magicNum: 1,
          chosen: false,
          src: './empty.png'
        },
        {
          magicNum: 1,
          chosen: false,
          src: './empty.png'
        },
        {
          magicNum: 1,
          chosen: false,
          src: './empty.png'
        },
        {
          magicNum: 1,
          chosen: false,
          src: './empty.png'
        },
        {
          magicNum: 1,
          chosen: false,
          src: './empty.png'
        }
      ]
    }
    this.makeMove = this.makeMove.bind(this);
    
  }
  togglePiece() {
    let pieceImage = this.props.src;
    if(pieceImage === './empty.png') {
      pieceImage = './letter-x.png';
    } else if (pieceImage === './letter-x.png') {
      pieceImage = './letter-o.png';
    } else {
      pieceImage = './empty.png';
    }
    console.log(pieceImage);
    return pieceImage;
  }
  makeMove(position) {
    
    const clickedSquare = this.state.boxes[position];
    const first = this.state.boxes.slice(0, position);
    const last = this.state.boxes.slice(position + 1);
    const piece = this.props.src;
    const newSquares = [
      ...first,
      {...clickedSquare, chosen: !clickedSquare.chosen },
      ...last
    ];
    this.setState({boxes: newSquares});

  }
  render() {
    const { boxes } = this.state;
    const GameGrid = boxes.map((box, index) => <Piece 
      key={index} 
      onChoose={() => this.makeMove(index)}
      src={box.src} 
      /*magicNum={this.magicNum}*/
    />) 
    return (
      <div>
        <h1>Tactical Tick's Toes</h1>
        <div className="container d-flex grid-style">
          { GameGrid }
        </div>
      </div>
    );
  }
}

export default App;
