import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class Piece extends Component {
    render() {
        
        return (
            <div className="border border-dark box-size">
                <img alt="piece" onClick={this.props.onChoose} src={this.props.src}/>
            </div>
        );
    }

}
export default Piece;