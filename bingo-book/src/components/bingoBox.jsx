import React, { Component } from "react";
import BingoItemList from "./bingoItemList";

class BingoBox extends Component {
    state = {
        title: "",
        items: []
    };

    handleItemAddition(event) {
        if (event.key === "Enter") {
            console.log("Item Entered");
        }
    }

    addItem() {
        //var item = getElementById("itemToEnter");
        console.log("Item Added");
    }

    render() {
        return (
            <React.Fragment>
                <input
                    onKeyPress={this.handleItemAddition}
                    id="itemToEnter"
                    type="text"
                    placeholder="Enter"
                />
                <button className="m-2" onClick={this.addItem}> Add </button>
                <BingoItemList />
            </React.Fragment>
        );
    }

}



export default BingoBox;
