import React, { Component } from 'react';


class BingoTitle extends Component {
       
    render () {
        return ( <div>
                    <form> 
                        <input 
                            type = "text" 
                            name = "name"      
                        /> 
                       
                        
                        <input 
                            className = "btn btn-warning m-1" 
                            value = "Create Bingo Card" 
                            onClick = {this.handleCreate}
                            
                        /> 
                    </form>
                </div>
        )
    }

    handleCreate = () => {
        console.log("bingo created");
        
    }
}

export default BingoTitle;
