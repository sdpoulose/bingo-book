import React, { Component } from "react";

class BingoItem extends Component {

    state = {

    };

    render() {
        return this.createItem(this.props.item, this.props.index);
        //<button className="m-2 btn btn-success"> {this.props.item}</button>;
    }

    createItem = (item, index) => {
        if (item != '') {
            return <button className="m-2 btn btn-warning">{index} {item}</button>;
        }
        else {

            return <h1> </h1>
        }
    }
}

export default BingoItem;