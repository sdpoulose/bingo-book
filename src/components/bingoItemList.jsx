import React, { Component } from 'react';
import BingoItem from './bingoItem';

class BingoItemList extends Component {
    state = {
        bingoTitle: ' ',
        bingoItemList: []
    };
    render () {
        return ( 
            <div> 
                <BingoItem/>
                <BingoItem/>
                <BingoItem/>
                <BingoItem/>
                <BingoItem/>
                <input className = "btn-success" type = "submit" value = "Submit" />
            </div>
        );
    }
}

export default BingoItemList;