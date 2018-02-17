import React, { Component } from 'react';
import Piece from './Piece';
import Empty from './empty.png';
import LetterO from './letter-o.png';
import LetterX from './letter-x.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextPlayer: 'O',
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
      currentPlayer: '',
      boxes: this.state.boxes.map(box => ({
        ...box,
        chosen: false,
        player: '',
        src: Empty
      }))})
  }

  
  togglePiece(box) {
    let nextPlayer = this.state.nextPlayer;
    let pieceImage = box.src;
    let boxOwner = box.player;
    let boxTaken = box.chosen;
    if (nextPlayer === 'O' && boxTaken === false) {
      pieceImage = LetterO;
      boxTaken = true;
      boxOwner = 'O'
      const playerO = {chosen: boxTaken, player: boxOwner, src: pieceImage};
      return playerO;
    } else if (nextPlayer === 'X' && boxTaken === false) {
      pieceImage = LetterX;
      boxTaken = true;
      boxOwner = 'X';
      const playerX = {chosen: boxTaken, player: boxOwner, src: pieceImage};
      return playerX;
    } else {
      return;
    }
   }
  makeMove(position) {
    
    const clickedSquare = this.state.boxes[position];
    if (clickedSquare.chosen) {
      alert('Square is taken!');
      return;
    } else {
      clickedSquare.chosen = false;
    }
    let playerToggle = this.state.nextPlayer;
    if(playerToggle === 'X') {
      playerToggle = 'O';
    } else {
      playerToggle = 'X';
    }
    const first = this.state.boxes.slice(0, position);
    const last = this.state.boxes.slice(position + 1);
    const newSquares = [
      ...first,
      {...clickedSquare, ...this.togglePiece(clickedSquare) },
      ...last
    ];
    this.setState({boxes: newSquares, nextPlayer: playerToggle});

  }
  render() {
    const { boxes } = this.state;
    const GameGrid = boxes.map((box, index) => <Piece 
      key={index} 
      onChoose={() => this.makeMove(index)}
      src={box.src}
      chosen={box.chosen} 
      /*magicNum={this.magicNum}*/
    />) 
    return (
      <div>
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-md-12">
              <h1>Tactical Tick's Toes</h1>
              <button onClick={this.clearBoard}>Reset Board</button>
              <h2>Next Player: {this.state.nextPlayer}</h2>
            </div>
          </div>
        </div>
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
