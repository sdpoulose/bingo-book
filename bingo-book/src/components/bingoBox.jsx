import React, { Component } from "react";
import BingoItemList from "./bingoItemList";

class BingoBox extends Component {
    state = {
        items: []
    };

    handleItemAddition = (event) => {
        if (event.key === "Enter") {
            console.log("Item Entered");
            var item = event.target.value;
            console.log(item)
            this.setState({
                items: [...this.state.items, item]
            });
            document.getElementById("item").value = "";
        }
    }

    handleItemEnter() {
        console.log("Item Added");
        var item = document.getElementById(item);
        console.log(item)
    }

    render() {
        return (
            <React.Fragment>
                <input
                    onKeyPress={this.handleItemAddition}
                    id="item"
                    type="text"
                    placeholder="Enter"
                />
                <button className="m-2" onClick={this.handleItemEnter}> Add </button>
                <BingoItemList />
            </React.Fragment>
        );
    }

}



export default BingoBox;
