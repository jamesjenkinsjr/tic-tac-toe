import React, { Component } from 'react';
class Piece extends Component {
    render() {
        return (
            <div>
                <i alt="piece" aria-hidden="true" 
                /*onClick function and className function go here
                onClick={} 
                className={}*/></i>
                <p>Eventually a piece</p>
            </div>
        );
    }

}
export default Piece;