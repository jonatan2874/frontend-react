import ApiRoutes from './ApiConfig.json';


export async function login (params){
	let {username,contrasena} = params
	
    // return fetch(`${ApiRoutes.url}login?&username=${username}&contrasena=${contrasena}`, {
	// 	'mode': 'no-cors',
	// 	'headers': {
	// 		'Access-Control-Allow-Origin': '*',
	// 	}
	// })
	// .then(function(response) {
	// 	return response.json();
	// })

	// return fetch(`${ApiRoutes.url}login?&username=${username}&contrasena=${contrasena}`,
	// {
	// 	method:'GET',
	// 	mode: 'no-cors',
	//   	headers: new Headers({
	//     	// "Authorization": `Basic ${btoa(`${user_name}:${token}:${nitEmpresa}`)}`
	//   	}),
	// }).then(response => {
	// 	// console.log(response);
	//   if (!response.ok) throw new Error(response.status);
	//   return response.json();
	// })
	// .catch(error => console.error('Error:', error))

	const response  = await fetch(`${ApiRoutes.url}login?&username=${username}&contrasena=${contrasena}`)
		.then(function(response) {
			return response.json();
		})
}


// export  function validateToken(token,nit,id_sucursal){
//     return fetch(`${ApiConfig.url}?method=validateToken&token=${token}&nit=${nit}&id_sucursal=${id_sucursal}`)
//     		.then(function(response) {
// 		        return response.text();
// 		    })
// }

// export  function validatePin(pin=''){
//     return fetch(`${ApiConfig.url}?method=validatePin&pin=${pin}&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`)
//     		.then(function(response) {
// 		        return response.json();
// 		    })
// }


// export function getConsultHuesped(nit,like=''){
// 	return fetch(`${ApiConfig.url}?method=getPosHuesped&url=${ApiConfig.urlSIHO}&nit=${nit}&like=${like}`)
//     		.then(function(response) {
// 		        return response.json();
// 		    })
// }

// /**
//  * savePayPos Consultar los restaurantes para listarlos en el aside
//  * @return Json Lista de los restaurantes configurados en ERP
//  */
// export  function savePayPos(response){
// 	return fetch(`${ApiConfig.url}?method=savePayPos&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(response), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// }
// /**
//  * getRestaurants Consultar los restaurantes para listarlos en el aside
//  * @return Json Lista de los restaurantes configurados en ERP
//  */
// export  function getRestaurants(nit,id_sucursal){
//     return fetch(`${ApiConfig.url}?method=getRestaurantes&nit=${nit}&id_sucursal=${id_sucursal}`)
//     		.then(function(response) {
// 		        return response.text();
// 		    })
// }

// /**
//  * getCashRegister Consultar las cajas registradoras
//  * @param  Int id_restaurante Id del restaurante de donde se consultaran las cajas
//  * @return Json     Lista de las cajas del restaurante
//  */
// export  function getCashRegister(id_restaurante){
//     return fetch(`${ApiConfig.url}?method=getCashRegister&id_restaurante=${id_restaurante}&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`)
//     		.then(function(response) {
// 		        return response.text();
// 		    })
// }

// /**
//  * getCashRegisterState Consultar el estado de la caja cuando se selecciona
//  * @param  Int id_caja Id de la caja a consultar
//  * @return Json       Informacion del estado de la caja (Abierta,Cerrada)
//  */
// export  function getCashRegisterState(id_caja){
//     return fetch(`${ApiConfig.url}?method=getCashRegisterState&id_caja=${id_caja}&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`)
//     		.then(function(response) {
// 		        return response.text();
// 		    })
// }

// /**
//  * openCashRegister Abrir caja registradora
//  * @param  Json params Parametros requeridos para la apertura de caja
//  * @return Json      Informacion con la respuesta de la peticion
//  */
// export  function openCashRegister(params){

// 	// var url = 'https://example.com/profile';
// 	// var data = {username: 'example'};
// 	// return;
// 	return fetch(`${ApiConfig.url}?method=openCashRegister&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(params), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// 	// .catch(error => console.error('Error:', error))
// 	// .then(response => console.log('Success:', response));
// }

// /**
//  * getEstadoMesas Consultar los diferentes estados de las mesas
//  * @return Json     Lista de los diferentes estados posibles de las mesas
//  */
// export function getEstadoMesas() {
// 	return fetch(`${ApiConfig.url}?method=getEstadoMesas&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`)
//     		.then(function(response) {
// 		        return response.text();
// 		    })
// }

// /**
//  * getMesas Consultar las mesas de un restaurante
//  * @param  Int id_restaurante Id del restaurante de donde se consultaran las mesas
//  * @return Json     Lista de las mesas del restaurante
//  */
// export function getMesas(id_restaurante) {
// 	return fetch(`${ApiConfig.url}?method=getMesas&id_restaurante=${id_restaurante}&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`)
//     		.then(function(response) {
// 		        return response.text();
// 		    })
// }

// /**
//  * getEstadoMesa Consultar las mesas de un restaurante
//  * @param  Int id_restaurante Id del restaurante de donde se consultaran las mesas
//  * @param  Int id_caja Id de la caja
//  * @param  Int id_mesa Id de la mesa
//  * @return Json   Estado de la mesa
//  */
// export function getEstadoMesa(id_restaurante,id_caja,id_mesa) {
// 	return fetch(`${ApiConfig.url}?method=getEstadoMesa&id_restaurante=${id_restaurante}&id_caja=${id_caja}&id_mesa=${id_mesa}&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`)
//     		.then(function(response) {
// 		        return response.text();
// 		    })
// }

// /**
//  * openTableAccount abrir la cuenta de una mesa con comensales y demas info
//  * @param  Int id_restaurante Id del restaurante de donde se consultaran las mesas
//  * @param  Int id_caja Id de la caja
//  * @param  Int id_mesa Id de la mesa
//  * @return Json   Estado de la mesa
//  */
// export function openTableAccount(params) {
// 	return fetch(`${ApiConfig.url}?method=openTableAccount&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(params), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// }

// export function updateTableAccount(params) {
// 	return fetch(`${ApiConfig.url}?method=updateTableAccount&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(params), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// }

// /**
//  * getItems Consultar los items del POS
//  * @return Json   Estado de la mesa
//  */
// export function getItems(id_empleado,nitEmpresa,user_name,token,cadena) {
// 	return fetch(`${ApiConfig.urlERP}?disponible_pos=true&nombre=`+cadena,
// 	{
// 		method:'GET',
// 	  	headers: new Headers({
// 	    	"Authorization": `Basic ${btoa(`${user_name}:${token}:${nitEmpresa}`)}`
// 	  	}),
// 	}).then(response => {
// 		// console.log(response);
// 	  if (!response.ok) throw new Error(response.status);
// 	  return response.json();
// 	})
// 	.catch(error => console.error('Error:', error))

// }

// /**
//  * saveItem Guardar item en la cuenta de una mesa
//  * @param  Json params Parametros requeridos para la insercion del item
//  * @return Json      Informacion con la respuesta de la peticion
//  */
// export  function saveItem(params){
// 	return fetch(`${ApiConfig.url}?method=saveItem&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(params), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// }

// /**
//  * deleteItem Guardar item en la cuenta de una mesa
//  * @param  Json params Parametros requeridos para la insercion del item
//  * @return Json      Informacion con la respuesta de la peticion
//  */
// export  function deleteItem(id_cuenta,id_row,id_item){
// 	return fetch(`${ApiConfig.url}?method=deleteItem&id_cuenta=${id_cuenta}&id_row=${id_row}&id_item=${id_item}&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`)
//     		.then(function(response) {
// 		        return response.json();
// 		    })
// }

// /**
//  * solicitarPedido Solicitar o comandar items en una cuenta de una mesa
//  * @param  Json params Parametros requeridos para la insercion del pedido
//  * @return Json      Informacion con la respuesta de la peticion
//  */
// export  function solicitarPedido(params){
// 	return fetch(`${ApiConfig.url}?method=solicitarPedido&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(params), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// }

// /**
//  * changeCuentaMesa Cambiar la cuenta de una mesa a otra
//  * @param  Json params Parametros requeridos para la actualizacion del registro
//  * @return Json      Informacion con la respuesta de la peticion
//  */
// export  function changeCuentaMesa(params){
// 	return fetch(`${ApiConfig.url}?method=changeCuentaMesa&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(params), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// }

// /**
//  * closeMesa Cerrar mesa
//  * @param  Json params Parametros requeridos para la actualizacion del registro
//  * @return Json      Informacion con la respuesta de la peticion
//  */
// export  function closeMesa(params){
// 	return fetch(`${ApiConfig.url}?method=closeMesa&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(params), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// }

// /**
//  * generateTiquet Generar la venta en el POS
//  * @param  Json params Parametros requeridos para la actualizacion del registro
//  * @return Json      Informacion con la respuesta de la peticion
//  */
// export  function generateTiquet(params){
// 	return fetch(`${ApiConfig.url}?method=generateTiquet&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(params), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// }

// /**
//  * getPagosCaja Consultar las ventas o pagos realizados desde una caja antes de realizar el cierre
//  * @param  Int id_caja Id de la caja a consultar
//  * @return Json       Listado de las facturas de la caja
//  */
// export  function getPagosCaja(id_caja){
//     return fetch(`${ApiConfig.url}?method=getPagosCaja&id_caja=${id_caja}&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}&id_usuario=${globalState.getState().userData.id_empleado}`)
//     		.then(function(response) {
// 		        return response.json();
// 		    })
// }

// /**
//  * cerrarCaja Cerrar la caja abierta
//  * @param  Json params Parametros requeridos para la actualizacion del registro
//  * @return Json      Informacion con la respuesta de la peticion
//  */
// export  function cerrarCaja(params){
// 	return fetch(`${ApiConfig.url}?method=cerrarCaja&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(params), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// }

// /**
//  * logOutToken Cerrar Sesion del Pos
//  * @param  Json params Parametros requeridos para la actualizacion del registro
//  * @return Json      Informacion con la respuesta de la peticion
//  */
// export  function logOutToken(params){
// 	return fetch(`${ApiConfig.url}?method=logOutToken&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`, {
// 		method  : 'POST', // or 'PUT'
// 		body    : JSON.stringify(params), // data can be `string` or {object}!
// 		mode    : 'cors',
// 		headers : {
// 	    	'Content-Type': 'application/json',
// 	  	}
// 	}).then(res => res.json())
// }

// /**
//  * getComensales Consultar los comensales de la mesa
//  * @param  Int id_caja Id de la caja a consultar
//  * @return Json       Listado de las facturas de la caja
//  */
// export  function getComensales(id_cuenta){
//     return fetch(`${ApiConfig.url}?method=getComensales&id_cuenta=${id_cuenta}&nit=${globalState.getState().userData.nitEmpresa}&id_sucursal=${globalState.getState().userData.id_sucursal}`)
//     		.then(function(response) {
// 		        return response.json();
// 		    })
// }

