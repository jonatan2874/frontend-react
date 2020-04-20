import React,{useState, Component} from 'react';
import './User.css';
import Modal from './../../Modal/Modal'
import {getUsers,addUser,deleteUser,editUser} from './../../../Actions/AppAction'
// import {UserModal} from './UserModal'

export class User extends Component {
    constructor(props){
        super(props)
        // this.titleModal = "";
        // this.btnModal = 
        this.state = { 
            isOpen: false,
            userList : '',
            titleModal : 'Agrgar nuevo usuario',
            btnModal : <button type="button" className="btn btn-success" onClick={this.saveUser} >Aceptar</button>,
            iduser : 0
        };
    }

    toggleModal = action => {
        let   title = ''
        ,       btn = '';
        if(action==='add'){
            title = "Agrgar nuevo usuario"
            btn = <button type="button" className="btn btn-success" onClick={this.saveUser} >Aceptar</button>
        }
        else{
            title = "Actualizar usuario"
            btn = <button type="button" className="btn btn-success" onClick={this.updateUser} >Actualizar</button>

        }

        this.setState({
          isOpen: !this.state.isOpen,
          titleModal : title,
          btnModal : btn
        });
    }
    
    componentWillMount(){
        this.getAllUsers();
    }

    getAllUsers = async ()=>{
        const response = await getUsers('');
        if (response && response.success){
            if(response.data.failure !== undefined ){alert(response.data.detalle); return};
            
            this.setState({
                userList : response.data.map(element=>{ 
                    return  <tr key={element.id}>
                                <td className="text-muted">{element.nombres}</td>
                                <td className="text-muted">{element.apellidos}</td>
                                <td className="text-muted">{element.identificacion}</td>
                                <td className="text-muted">{element.rol}</td>
                                <td className="text-muted">{element.estado}</td>
                                <td className="text-muted">{element.telefono}</td>
                                <td className="text-muted">{element.correo}</td>
                                <td className="actions">
                                    <a href="#" className="pr-1" onClick={()=>{this.updateUserrModal(element.id)}}><i className="fa fa-pencil"></i></a>
                                    <a href="#" className="delete-row"onClick={()=>{this.removeUser(element.id)}}><i className="fa fa-trash-o"></i></a>
                                </td>
                            </tr>
                })
            })
        }
    }

    saveUser = async ()=>{
        let params = {
            "nombres"        : document.getElementById('nombres').value,
            "apellidos"      : document.getElementById('apellidos').value,
            "identificacion" : document.getElementById('identificacion').value,
            "rol"            : document.getElementById('rol').value,
            "estado"         : document.getElementById('estado').value,
            "contrasena"     : document.getElementById('contrasena').value,
            "telefono"       : document.getElementById('telefono').value,
            "correo"         : document.getElementById('correo').value
        }
        // console.log(JSON.stringify(params));return;
        const response = await addUser(params);
        if (response && response.success){
            console.log(response.data);
            if(response.data.status==='success'){
                this.toggleModal();
                let lista = <tr key={response.data.data[0].id}>
                                <td className="text-muted">{params.nombres}</td>
                                <td className="text-muted">{params.apellidos}</td>
                                <td className="text-muted">{params.identificacion}</td>
                                <td className="text-muted">{params.rol}</td>
                                <td className="text-muted">{params.estado}</td>
                                <td className="text-muted">{params.telefono}</td>
                                <td className="text-muted">{params.correo}</td>
                                <td className="actions">
                                    <a href="#" className="pr-1" onClick={()=>{this.updateUserrModal(response.data.data[0].id)}}><i className="fa fa-pencil"></i></a>
                                    <a href="#" className="delete-row" onClick={()=>{this.removeUser(response.data.data[0].id)}}><i className="fa fa-trash-o"></i></a>
                                </td>
                            </tr>
            this.setState({
                userList : [lista,...this.state.userList ]
                    
                })
            }
            else {alert(response.data.msg); console.log(response) };
            
        }

    }

    removeUser = async key => {
        const response = await deleteUser(key);
        if (response && response.success){
            console.log(response.data);
            if(response.data.data[0].response==='success'){
                let users = this.state.userList;
                users.map((element,position)=>{
                    if(element.key===key){
                        delete users[position];
                    }
                })
                this.setState({
                    userList : users                        
                })
            }
            else {alert(response.data.msg); console.log(response) };
            
        }
        // deleteUser
    }

    updateUserrModal = async key =>{
        const response = await getUsers(`where=id:${key}`);
        if (response && response.success){
            console.log(response.data)
            if(response.data.failure !== undefined ){alert(response.data.detalle); return};
            this.toggleModal('update');
            document.getElementById('nombres').value = response.data[0].nombres;
            document.getElementById('apellidos').value = response.data[0].apellidos;
            document.getElementById('identificacion').value = response.data[0].identificacion;
            document.getElementById('rol').value = response.data[0].rol;
            document.getElementById('estado').value = response.data[0].estado;
            document.getElementById('contrasena').value = response.data[0].contrasena;
            document.getElementById('telefono').value = response.data[0].telefono;
            document.getElementById('correo').value = response.data[0].correo;
            this.setState({iduser:key})
        }
    }

    updateUser = async () =>{
        let params = {
            "id_user"        : this.state.iduser,
            "nombres"        : document.getElementById('nombres').value,
            "apellidos"      : document.getElementById('apellidos').value,
            "identificacion" : document.getElementById('identificacion').value,
            "rol"            : document.getElementById('rol').value,
            "estado"         : document.getElementById('estado').value,
            "contrasena"     : document.getElementById('contrasena').value,
            "telefono"       : document.getElementById('telefono').value,
            "correo"         : document.getElementById('correo').value
        }
        // console.log(JSON.stringify(params));return;
        const response = await editUser(params);
        if (response && response.success){
            console.log(response.data);
            if(response.data.status==='success'){
                this.toggleModal();
                let users = this.state.userList;
                users.map((element,position)=>{
                    if(element.key===this.state.iduser){
                        delete users[position];
                        users[position] =  <tr key={element.key}>
                                <td className="text-muted">{params.nombres}</td>
                                <td className="text-muted">{params.apellidos}</td>
                                <td className="text-muted">{params.identificacion}</td>
                                <td className="text-muted">{params.rol}</td>
                                <td className="text-muted">{params.estado}</td>
                                <td className="text-muted">{params.telefono}</td>
                                <td className="text-muted">{params.correo}</td>
                                <td className="actions">
                                    <a href="#" className="pr-1" onClick={()=>{this.updateUserrModal(element.key)}}><i className="fa fa-pencil"></i></a>
                                    <a href="#" className="delete-row"onClick={()=>{this.removeUser(element.key)}}><i className="fa fa-trash-o"></i></a>
                                </td>
                            </tr>
                    }
                })
                this.setState({
                    userList : users                        
                })
            }
            else {alert(response.data.msg); console.log(response) };
            
        }
    }

    render(){
        return (  
            [          
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title " >{this.state.titleModal}</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={this.toggleModal}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="nombres" className="text-muted">Nombres</label>
                                <input type="text" className="form-control form-control-sm" id="nombres" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="apellidos" className="text-muted">Apellidos</label>
                                <input type="text" className="form-control form-control-sm" id="apellidos" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="identificacion" className="text-muted">Identificacion(C.C)</label>
                                <input type="text" className="form-control form-control-sm" id="identificacion" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="rol" className="text-muted">Rol asociado</label>
                                <input type="text" className="form-control form-control-sm" id="rol" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="estado" className="text-muted">Estado</label>
                                <input type="text" className="form-control form-control-sm" id="estado" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="contrasena" className="text-muted">Contraseña</label>
                                <input type="password" className="form-control form-control-sm" id="contrasena" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="telefono" className="text-muted">Telefono</label>
                                <input type="text" className="form-control form-control-sm" id="telefono" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="correo" className="text-muted">Correo Electronico</label>
                                <input type="email" className="form-control form-control-sm" id="correo" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end align-items-center">
                        {this.state.btnModal}
                        <button type="button" className="btn btn-outline-success" onClick={this.toggleModal} >Cancelar</button>
                    </div>
                    </div>
                </Modal>,
                <div className="row align-items-start">
                    <div className="col-sm-9 pr-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex justify-content-start">
                                        <span className='material-icons pr-2'>group</span>
                                        <span>Usuarios Existentes</span>
                                    </div>                                
                                    <button type="button" id="btn-create" onClick={()=>{this.toggleModal('add') }} data-toggle="modal" data-target="#appModal" className="btn btn-primary btn-sm" >Crear</button>
                                </div>
                                
                                <div className="table-responsive">
                                    <table className="table mb-none table-hover">
                                        <thead>
                                            <tr>
                                                <td className="text-dark" >Nombres</td>
                                                <td className="text-dark" >Apellidos</td>
                                                <td className="text-dark" >Identificacion(C.C)</td>
                                                <td className="text-dark" >Rol asociado</td>
                                                <td className="text-dark" >Estado</td>
                                                <td className="text-dark" >Telefono</td>
                                                <td className="text-dark" >Correo Electronico</td>
                                                <td className="text-dark" >Accion</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.userList}
                                        </tbody>
                                    </table>
                                </div>
    
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 pl-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-start align-items-center mb-2">
                                    <span className='material-icons pr-2'>person</span>
                                    <span>Filtrar busqueda</span>
                                </div>
                                <form >
                                    <div className="form-group">
                                        <label htmlFor="searchNombres" className="text-muted">Nombres</label>
                                        <input type="text" className="form-control form-control-sm" id="searchNombres" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="searchApellidos" className="text-muted">Apellidos</label>
                                        <input type="text" className="form-control form-control-sm" id="searchApellidos" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="searchIdentificacion" className="text-muted">Identificacion (C.C)</label>
                                        <input type="text" className="form-control form-control-sm" id="searchIdentificacion" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="searchRol" className="text-muted">Rol asociado</label>
                                        <input type="text" className="form-control form-control-sm" id="searchRol" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="searchEstado" className="text-muted">Estado</label>
                                        <input type="text" className="form-control form-control-sm" id="searchEstado" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="searchContrasena" className="text-muted">Contraseña</label>
                                        <input type="text" className="form-control form-control-sm" id="searchContrasena" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="searchTelefono" className="text-muted">Telefono</label>
                                        <input type="text" className="form-control form-control-sm" id="searchTelefono" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="searchEmail" className="text-muted">Correo Electronico</label>
                                        <input type="email" className="form-control form-control-sm" id="searchEmail" ></input>
                                    </div>
                                </form>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <button type="button" className="btn btn-success btn-sm p-1">Filtrar</button>
                                    <button type="button" className="btn btn-outline-success btn-sm p-1">Limpiar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ]
    
        )
    }
    
    
}

