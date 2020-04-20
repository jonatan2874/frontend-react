import React,{useContext} from 'react';
import './User.css';

export const User = ()=>{
    return (
            
            <div className="row align-items-start">
                <div className="col-sm-9 pr-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex justify-content-start">
                                    <span className='material-icons pr-2'>group</span>
                                    <span>Usuarios Existentes</span>
                                </div>                                
                                <button type="button" id="btn-create" className="btn btn-primary btn-sm">Crear</button>
                            </div>
                            
                            <div class="table-responsive">
                                <table class="table mb-none table-hover">
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
                                        <tr>
                                            <td className="text-muted">1</td>
                                            <td className="text-muted">Mark</td>
                                            <td className="text-muted">Otto</td>
                                            <td className="text-muted">@mdo</td>
                                            <td class="actions">
                                                <a href=""><i class="fa fa-pencil"></i></a>
                                                <a href="" class="delete-row"><i class="fa fa-trash-o"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td class="actions">
                                                <a href=""><i class="fa fa-pencil"></i></a>
                                                <a href="" class="delete-row"><i class="fa fa-trash-o"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td class="actions">
                                                <a href=""><i class="fa fa-pencil"></i></a>
                                                <a href="" class="delete-row"><i class="fa fa-trash-o"></i></a>
                                            </td>
                                        </tr>
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
                                    <label for="nombres" className="text-muted">Nombres</label>
                                    <input type="text" className="form-control form-control-sm" id="nombres" ></input>
                                </div>
                                <div className="form-group">
                                    <label for="apellidos" className="text-muted">Apellidos</label>
                                    <input type="text" className="form-control form-control-sm" id="apellidos" ></input>
                                </div>
                                <div className="form-group">
                                    <label for="identificacion" className="text-muted">Identificacion (C.C)</label>
                                    <input type="text" className="form-control form-control-sm" id="identificacion" ></input>
                                </div>
                                <div className="form-group">
                                    <label for="rol" className="text-muted">Rol asociado</label>
                                    <input type="text" className="form-control form-control-sm" id="rol" ></input>
                                </div>
                                <div className="form-group">
                                    <label for="estado" className="text-muted">Estado</label>
                                    <input type="text" className="form-control form-control-sm" id="estado" ></input>
                                </div>
                                <div className="form-group">
                                    <label for="contrasena" className="text-muted">Contraseña</label>
                                    <input type="text" className="form-control form-control-sm" id="contrasena" ></input>
                                </div>
                                <div className="form-group">
                                    <label for="telefono" className="text-muted">Telefono</label>
                                    <input type="text" className="form-control form-control-sm" id="telefono" ></input>
                                </div>
                                <div className="form-group">
                                    <label for="email" className="text-muted">Correo Electronico</label>
                                    <input type="email" className="form-control form-control-sm" id="email" ></input>
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

        // <div className="container-fluid">
        //     usuario
        // </div>
    )
    
}
