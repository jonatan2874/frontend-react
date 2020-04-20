import React from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';
import Modules from './../Modules/structure.json';


const useSidebar = ()=>{
    const modules = Modules;
    
    return (
        <div className="border-right" id="sidebar-wrapper">
            <div className="sidebar-heading d-flex  align-items-center">
                <span className="material-icons ">fiber_manual_record</span>
                OLSoftware 
            </div>
            <ul className="list-group list-group-flush">
                {modules.map( module =>{ return <SidebarItem params={module} /> })}
            </ul>
        </div>
    )
    
}

export default useSidebar