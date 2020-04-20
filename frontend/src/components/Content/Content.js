import React,{Component} from 'react';
import { AppContext} from './../../Context/GlobalContext'

class Content extends Component{
    render(){
        const { ContentData } = this.context;
        return (       
            <div className="container-fluid">
                {ContentData}
            </div>
        ) 
    }
       
}
Content.contextType = AppContext;

export default Content