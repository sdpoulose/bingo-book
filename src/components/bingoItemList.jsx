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
                <form> 
                    <input 
                        type = "text" 
                        name = "title" 
                        id = "title"
                    /> 
                    <input 
                        className = "btn btn-danger m-2 btn-block" 
                        type = "reset" 
                        value = "Reset" 
                        name = "Reset" 
                    /> 
                </form>
                <BingoItem/>
                <BingoItem/>
                <BingoItem/>
                <BingoItem/>
                <BingoItem/>
                <input 
                    className = "btn-primary btn-lg" 
                    type = "submit" 
                    value = "Done" 
                    onClick = {this.handleDone}
                />
                <input 
                    className = "btn-success btn-block btn-lg m-2" 
                    type = "submit" 
                    value = "Submit" 
                    onClick = {this.handleSubmit}
                />
            </div>
        );
    }

    handleDone = () => {
        var bingoTitle = document.getElementById("title").value;
        this.setState({bingoTitle: bingoTitle});
        //console.log(this.state.bingoTitle);
    }

    handleSubmit = () => {
        console.log("");
    }
}

export default BingoItemList;