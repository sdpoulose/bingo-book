import React, { Component } from 'react';


class BingoTitle extends Component {
       
    render () {
        return ( <div>
                    <form action = 'http://localhost:5000/' method = 'POST'> 
                        <input 
                            type = "text" 
                            name = "title"
                            id = "title"      
                        /> 
                       
                        <input 
                            className = "btn btn-warning m-1" 
                            value = "Create Bingo Card" 
                            type = "submit"                       
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
