import React, { Component } from "react";
import BingoItem from "./bingoItem";

class BingoBox extends Component {
    state = {
        items: [
            ""
        ]

    };

    handleItemAddition = (event) => {
        if (event.key === "Enter") {
            console.log("Item Entered");
            var item = event.target.value;
            var last = this.state.items[this.state.items.length - 1].id + 1;

            this.setState({
                items: [...this.state.items, item]
            });
            document.getElementById("item").value = "";

        }
    }

    handleItemEnter = () => {
        console.log("Item Added");
        var item = document.getElementById(item);
        console.log(this.state.items);
    }

    styles = {
        listStyleType: 'none'
    };

    render() {
        return (
            <React.Fragment>
                <input
                    onKeyPress={this.handleItemAddition}
                    id="item"
                    type="text"
                    placeholder="Enter"
                />
                <button className="btn btn-primary m-2" onClick={this.handleItemEnter}> Add </button>
                <ol style={this.styles}>
                    {this.state.items.map(item => <li> <BingoItem item={item} /></li>)}
                </ol>
            </React.Fragment>
        );
    }

}



export default BingoBox;
