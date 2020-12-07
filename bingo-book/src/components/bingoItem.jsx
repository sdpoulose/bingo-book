import React, { Component } from "react";

class BingoItem extends Component {

    state = {

    };

    render() {
        return this.createItem(this.props.item, this.props.index);
        //<button className="m-2 btn btn-success"> {this.props.item}</button>;
    }

    createItem = (item, index) => {
        if (item !== '') {
            return <button className="m-2 btn btn-warning">{index} {item} <span onClick={this.handleDelete}> &#x274C; </span></button>;
        }
        else {

            return <h1> </h1>
        }
    }

    handleDelete() {
        console.log("Item will be deleted");
    }
}

export default BingoItem;