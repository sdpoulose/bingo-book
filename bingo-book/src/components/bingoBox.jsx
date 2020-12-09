import React, { Component } from "react";
import BingoItem from "./bingoItem";

class BingoBox extends Component {
    state = {
        items: [
            { item: "", index: 0 }
        ]

    };

    handleItemAddition = (event) => {
        if (event.key === "Enter") {
            console.log("Item Entered");
            var item = event.target.value;
            var last = 0;
            last = this.state.items[this.state.items.length - 1].index + 1;
            //console.log(last);
            this.setState({
                items: [...this.state.items, { item: item, index: last }]
            });
            document.getElementById("item").value = "";

        }
    }

    handleItemEnter = () => {
        console.log("Item Added");
        var item = document.getElementById(item);
        console.log(this.state.items);
    }

    deletionHandler = (id) => {
        console.log("item deletion signal recieved from child");
        console.log(id);
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
                <button className="btn btn-outline-primary m-2" onClick={this.handleItemEnter}> Add </button>
                <ol style={this.styles}>
                    {this.state.items.map(item => <li> <BingoItem item={item.item} index={item.index} deletionHandler={this.deletionHandler} /></li>)}
                </ol>
                <button className="btn btn-lg btn-outline-success btn-block m-2"> Create </button>
            </React.Fragment>
        );
    }

}



export default BingoBox;
