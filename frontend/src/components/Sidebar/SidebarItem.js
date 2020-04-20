import React, { Component } from 'react';
import { AppContext} from './../../Context/GlobalContext'
import {User} from './../Modules/User/User';
import UnderConstruction from './../Modules/UnderConstruction/UnderConstruction';

class SidebarItem extends Component{
    constructor(props){
        super(props);
        this.content = {
            'User' : <User/>,
            'UnderConstruction' : <UnderConstruction/>
        }
    }
    
    handler = ()=>{
        const {changeContent} = this.context
        let content = this.content[this.props.params.module];
        changeContent(content)
    }

    render(){
        const ElementClass = `material-icons ${this.props.params.class}`
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={this.handler} key={this.props.params.key} >
                <ol className="list-group-item d-flex justify-content-between align-items-center" >
                    <span className={ElementClass}>{this.props.params.icon}</span>
                    <span className="label" >{this.props.params.name}</span> 
                </ol>                    
                {this.props.params.dropdown && <span className="material-icons rotate">play_arrow</span>}
            </li>
        )
    }
    
    
}
SidebarItem.contextType = AppContext;
export default SidebarItem