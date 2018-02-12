import React, { Component } from 'react';
import Piece from './Piece';
import Empty from './empty.png';
import LetterO from './letter-o.png';
import LetterX from './letter-x.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [
        {
          magicNum: 1,
          chosen: false,
          src: Empty
        },
        {
          magicNum: 1,
          chosen: false,
          src: Empty
        },
        {
          magicNum: 1,
          chosen: false,
          src: Empty
        },
        {
          magicNum: 1,
          chosen: false,
          src: Empty
        },
        {
          magicNum: 1,
          chosen: false,
          src: Empty
        },
        {
          magicNum: 1,
          chosen: false,
          src: Empty
        },
        {
          magicNum: 1,
          chosen: false,
          src: Empty
        },
        {
          magicNum: 1,
          chosen: false,
          src: Empty
        },
        {
          magicNum: 1,
          chosen: false,
          src: Empty
        }
      ]
    }
    this.makeMove = this.makeMove.bind(this);
    
  }
  togglePiece(box) {
    let pieceImage = box.src;

    if (pieceImage === Empty) {
      pieceImage = LetterO;
    } else if (pieceImage === LetterO) {
      pieceImage = LetterX;
    } else  {
      pieceImage = Empty;
    }
     return pieceImage;
   }
  makeMove(position) {
    
    const clickedSquare = this.state.boxes[position];
    const first = this.state.boxes.slice(0, position);
    const last = this.state.boxes.slice(position + 1);
    const piece = this.props.src;
    const newSquares = [
      ...first,
      {...clickedSquare, src: this.togglePiece(clickedSquare) },
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
          <div className="row">
            { GameGrid }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
