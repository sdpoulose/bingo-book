import React, { Component } from 'react';


class BingoItem extends Component {
    
    //state = {
    //    value: ''
    //}

    render () {
        return ( <div>
                    <form> 
                        <input 
                            type = "text" 
                            name = "name"      
                        /> 
                       
                        <input 
                            className = "btn btn-danger m-2" 
                            type = "reset" 
                            value = "Reset" 
                            name = "Reset" 
                        /> 
                        <input 
                            type = "button"
                            className = "btn btn-success m-1" 
                            value = "Add" 
                            onClick = {this.handleAdd}
                            
                        /> 
                    </form>
                </div>
        )
    }

    

    handleAdd = () => {
        console.log("item added");
        
    }
}

export default BingoItem;
