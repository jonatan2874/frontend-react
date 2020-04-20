import React, { Component } from 'react';
import { AppContext} from './../../Context/GlobalContext';
import {login} from './../../Actions/AppAction';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);        
    }
    
    sing_in = ()=>{
        let params = {
            username : document.getElementById('username').value,
            contrasena : document.getElementById('password').value
        }
        
        login(params).then(function(data) {
            console.log(data);
        })
    }

    render(){
        return (
                <div className="text-center">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Inicio de Sesion</h1>
                        <label htmlFor="username" className="sr-only">Usuario</label>
                        <input type="text" id="username" className="form-control" placeholder="Usuario" required autoFocus/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Contraseña" required/>
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.sing_in}>Iniciar Sesion</button>
                        <p className="mt-5 mb-3 text-muted">&copy; OLSoware - 2020</p>
                    </form>
                </div>
            )
    }
}

Login.contextType = AppContext;

export default Login;
