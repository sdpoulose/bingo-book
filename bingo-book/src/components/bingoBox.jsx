import React, { Component } from "react";

class BingoBox extends Component {
    state = {}

    handleItemAddition(event) {
        if(event.key === "Enter"){
            console.log("Item Added");
        }
        
    }

    render () {
        return (
            <input 
                onKeyPress={this.handleItemAddition} 
                type="text" 
                placeholder="Enter"
            />
        );      
    }
}

export default BingoBox;
