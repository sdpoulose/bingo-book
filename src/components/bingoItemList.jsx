import React, { Component } from 'react';
import BingoItem from './bingoItem';
import BingoTitle from './bingoTitle';

class BingoItemList extends Component {
    state = {
        bingoItems: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 }
        ]
    };
    render () {
        return ( 
            <div> 
                <BingoTitle/>              
                { this.state.bingoItems.map(bingoItem => 
                    <BingoItem 
                        key = {bingoItem.id} 
                    />)
                }

                
                <input 
                    className = "btn btn-primary btn-block btn-lg m-2" 
                    type = "submit" 
                    value = "Submit" 
                    onClick={() => window.location.reload(false)}
                />
                
            </div>
        );
    }
}

export default BingoItemList;