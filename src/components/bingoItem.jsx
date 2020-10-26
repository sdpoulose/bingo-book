import React, { Component } from 'react';


class BingoItem extends Component {
    state = {
        name: " "
    };

    render () {
        return ( <div>
                    <form> 
                        <input 
                            type = "text" 
                            //value = {this.state.name}
                            name = "name" 
                            onChange={e => this.handleInput(e.target.value)}

                        /> 
                        <input 
                            className = "btn btn-danger m-2" 
                            type = "reset" 
                            value = "Reset" 
                            name = "Reset" 
                        /> 
                    </form>
                </div>
        )
    }

    handleInput(value) {
        this.setState({name: value});
        //console.log(this.state.name);
    }
}

export default BingoItem;
