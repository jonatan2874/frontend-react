import React from 'react';
/**
 * 
 * @param {Object} params Parametros del sidebar para renderizar la lista de modulos
 */
const SidebarItem = (params = '') =>{
    const ElementClass = `material-icons ${params.class}`

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={params.key}>
            <ol className="list-group-item d-flex justify-content-between align-items-center">
                <span className={ElementClass}>{params.icon}</span>
                <span className="label" >{params.name}</span> 
            </ol>                    
            <span className="material-icons rotate">play_arrow</span>
        </li>
    )
    
}

export default SidebarItem