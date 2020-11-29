import React, { Component } from "react";

class BingoItemList extends Component {
    state = {
        bingoItems: []
    };

    render() {
        return (
            <ul> {this.state.bingoItems.map(tag => <li key={tag}>{tag}</li>)}</ul>
        );
    }
}

export default BingoItemList;