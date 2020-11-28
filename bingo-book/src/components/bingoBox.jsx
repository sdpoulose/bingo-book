import React, { Component } from "react";
import BingoItemList from "./bingoItemList";

class BingoBox extends Component {
    state = {}

    handleItemAddition(event) {
        if(event.key === "Enter"){
            console.log("Item Added");
        }    
    }

    render () {
        return (
            <React.Fragment>
                <input 
                    onKeyPress={this.handleItemAddition} 
                    id="item"
                    type="text" 
                    placeholder="Enter"
                />
                <BingoItemList/>
            </React.Fragment>
        );      
    }
}

export default BingoBox;
