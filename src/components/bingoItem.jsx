import React, { Component } from 'react';


class BingoItem extends Component {
    
    //state = {
    //    value: ''
    //}

    render () {
        return ( <div>
                    <form action = 'http://localhost:5000/' method = 'POST'> 
                        <input 
                            type = "text" 
                            name = "content"   
                            id = "content"   
                        /> 
                       
                        <input 
                            className = "btn btn-danger m-2" 
                            type = "reset" 
                            value = "Reset" 
                            name = "Reset" 
                        /> 
                        <input 
                            type = "submit"
                            className = "btn btn-success m-1" 
                            value = "Add" 
                            
                        /> 
                    </form>
                </div>
        )
    }
}

export default BingoItem;
