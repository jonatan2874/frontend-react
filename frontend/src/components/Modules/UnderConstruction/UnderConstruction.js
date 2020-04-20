import React, { Component } from 'react';
import {AppContext} from './../../../Context/GlobalContext'

class UnderConstruction extends Component{
    constructor(props){
        super(props);
    }

    openModal=(e)=>{
        e.preventDefault();
        let element = document.getElementById('appModal');
        console.log(element)
        // element.modal();
        // element.classList.toggle("modal");

        const {changeModalContent} = this.context
        ,   content = <div>content modal</div>
        changeModalContent(content);
        
    }

    render()
    {
        return (
            <div className="container-fluid">
                Sitio en construccion
            </div>
        )
    }
    
}
UnderConstruction.contextType = AppContext;
export default UnderConstruction;
