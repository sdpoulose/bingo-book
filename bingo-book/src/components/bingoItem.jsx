import React, { Component } from "react";

class BingoItem extends Component {

    state = {

    };

    render() {
        return this.createItem(this.props.item);
        //<button className="m-2 btn btn-success"> {this.props.item}</button>;
    }

    createItem = (item) => {
        if (item != '') {
            return <button className="m-2 btn btn-success">{item}</button>;
        }
        else {

            return <h1> </h1>
        }
    }
}

export default BingoItem;