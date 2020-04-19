import React from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';

const useSidebar = ()=>{
    // const [] = useState()
    const modules = [
        {
            key : 1,
            name : 'Programacion',
            icon : 'map'
        },
        {
            key : 2,
            name : 'Gestion de operaciones',
            icon : 'format_list_bulleted'
        },
        {
            key : 3,
            name : 'Perfiles',
            icon : 'tune'
        },
        {
            key : 4,
            name : 'Roles',
            icon : 'R',
            class : 'text'
        },
        {
            key : 5,
            name : 'Usuario',
            icon : 'U',
            class : 'text'
        },
        {
            key : 6,
            name : 'Reportes',
            icon : 'insert_drive_file'
        }
    ];
    
    return (
        <div className="border-right" id="sidebar-wrapper">
            <div className="sidebar-heading d-flex  align-items-center">
                <span className="material-icons ">fiber_manual_record</span>
                OLSoftware 
            </div>
            <ul className="list-group list-group-flush">
                {modules.map( module =>{ return SidebarItem(module) } )}
            </ul>
        </div>
    )
    
}

export default useSidebar