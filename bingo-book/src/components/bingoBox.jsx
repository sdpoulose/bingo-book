import React, { Component } from "react";
import BingoItemList from "./bingoItemList";

class BingoBox extends Component {
    state = {
        title: "",
        items: []
    };

    handleItemAddition(event) {
        if(event.key === "Enter"){
            console.log("Item Added");
            let input = document.getElementById("item").nodeValue;
            console.log(input);
            //this.setState({itmes: [...this.state.items, input] });
            //console.log(this.state.items);
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
