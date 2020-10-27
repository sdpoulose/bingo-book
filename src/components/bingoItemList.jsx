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
                <form action = 'http://localhost:5000/' method = 'GET'>
                    <input 
                        type = "number" 
                        min = '1'
                        name = "id_dl"
                        id = "id_dl"      
                    /> 
                    <input 
                        className = "btn btn-primary btn-info btn-lg m-2" 
                        type = "submit" 
                        value = "Download" 
                        onClick={() => window.location.reload(false)}
                    />
                </form>
    
            </div>
        );
    }
}

export default BingoItemList;