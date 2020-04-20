import React, { Component } from 'react';
import { AppContext} from './../../Context/GlobalContext';
import {login} from './../../Actions/AppAction';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);        
    }
    
    sing_in = async () => {
        const {setUserData} = this.context
        let params = {
            username : document.getElementById('username').value,
            contrasena : document.getElementById('password').value
        }
        if(params.username==='' || params.contrasena==='') return;
        console.log(setUserData)
        const response = await login(params);
        if (response && response.success){
            console.log(response.data);
            if(response.data.failure !== undefined ){alert(response.data.detalle); return};
            
            localStorage.UserData=JSON.stringify(response.data);
            this.props.changeState(true);

        }

    }
    

    render(){
        return (
                <div id="login-content">
                    <div className="text-center">
                        <div className="form-signin" >
                            <h1 className="h3 mb-3 font-weight-normal">Inicio de Sesion</h1>
                            <label htmlFor="username" className="sr-only">Usuario</label>
                            <input type="text" value="1" id="username" className="form-control" placeholder="Usuario" required autoFocus/>
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" value="1" id="password" className="form-control" placeholder="Contraseña" required/>
                            <button className="btn btn-lg btn-primary btn-block" onClick={this.sing_in}>Iniciar Sesion</button>
                            <p className="mt-5 mb-3 text-muted">&copy; OLSoware - 2020</p>
                        </div>
                    </div>
                </div>
            )
    }
}

Login.contextType = AppContext;

export default Login;
