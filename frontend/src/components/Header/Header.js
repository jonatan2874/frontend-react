import React, { Component } from 'react';
import './Header.css';
import userIcon from './../../resources/img/user.png';

class Header extends Component{
    constructor(props){
        super(props);
    }
    // const [] = useState()
    collapseSidebar = (e) =>{
        e.preventDefault();
        let element = document.getElementById('wrapper');
        element.classList.toggle("toggled");
    }

    logOut = ()=>{
        localStorage.UserData='';
        this.props.changeState(false)
    }

    render(){
        let userInfo = JSON.parse(localStorage.UserData)
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom d-flex justify-content-between mb-4">
                <div className="d-flex justify-content-between">
                    <span className='material-icons' onClick={this.collapseSidebar}>dehaze</span>
                    <span className="label" >Prueba Front-end </span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">
                        <img src={userIcon} width="30" height="30" alt=""/>                    
                    </a>
                    <span className="user-name-label">{userInfo.nombres} {userInfo.apellidos}</span>
                    <span className='material-icons' onClick={this.logOut}>exit_to_app</span>
                </div>
                
            </nav>
        )
    }
  
    
}

export default Header