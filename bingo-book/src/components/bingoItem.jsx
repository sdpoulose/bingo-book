import React, { Component } from "react";

class BingoItem extends Component {

    state = {
        value: this.props.value
    };

    render() {
        return (

            <button className="btn btn-secondary m-2"> {this.state.value} </button>

        );
    }
}

export default BingoItem;