import React, { Component } from 'react';
import Piece from './Piece';
import Empty from './empty.png';
import LetterO from './letter-o.png';
import LetterX from './letter-x.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayer: 1,
      boxes: [
        {
          magicNum: 1,
          chosen: false,
          player: '',
          src: Empty
        },
        {
          magicNum: 2,
          chosen: false,
          player: '',
          src: Empty
        },
        {
          magicNum: 4,
          chosen: false,
          player: '',
          src: Empty
        },
        {
          magicNum: 8,
          chosen: false,
          player: '',
          src: Empty
        },
        {
          magicNum: 16,
          chosen: false,
          player: '',
          src: Empty
        },
        {
          magicNum: 32,
          chosen: false,
          player: '',
          src: Empty
        },
        {
          magicNum: 64,
          chosen: false,
          player: '',
          src: Empty
        },
        {
          magicNum: 128,
          chosen: false,
          player: '',
          src: Empty
        },
        {
          magicNum: 256,
          chosen: false,
          player: '',
          src: Empty
        }
      ]
    }
    this.makeMove = this.makeMove.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    
  }
  clearBoard() {
    this.setState({ 
      boxes: this.state.boxes.map(box => ({
        ...box,
        chosen: false,
        player: '',
        src: Empty
      }))})
  }
  togglePiece(box, piece) {
    let pieceImage = box.src;
    let player = this.state.currentPlayer;

    if (player === 1) {
      pieceImage = LetterO;
      player = 0;
      } else {
      pieceImage = LetterX;
      player = 1;
    } 
      this.setState({currentPlayer: player});
     return pieceImage;
   }
  makeMove(position) {
    
    const clickedSquare = this.state.boxes[position];
    const first = this.state.boxes.slice(0, position);
    const last = this.state.boxes.slice(position + 1);
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
        <button onClick={this.clearBoard}>Reset Board</button>
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
