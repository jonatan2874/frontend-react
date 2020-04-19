import React from 'react';
import './Header.css';
import userIcon from './../../resources/img/user.png';

const useHeader = ()=>{
    const userName = "Andrés Felipe Garcia Castro";
    // const [] = useState()
    const collapseSidebar = (e) =>{
        e.preventDefault();
        let element = document.getElementById('wrapper');
        element.classList.toggle("toggled");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom d-flex justify-content-between">
            <div className="d-flex justify-content-between">
                <span className='material-icons' onClick={collapseSidebar}>dehaze</span>
                <span className="label" >Prueba Front-end </span>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
                <a className="navbar-brand" href="#">
                    <img src={userIcon} width="30" height="30" alt=""/>
                    
                </a>
                <span className="user-name-label">{userName}</span>
                <span className='material-icons'>exit_to_app</span>
            </div>
            
        </nav>
    )
    
}

export default useHeader