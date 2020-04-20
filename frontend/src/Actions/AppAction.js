import ApiRoutes from './ApiConfig.json';

export const verifiedToken = async (token)=>{
	
	let resp = await fetch(`${ApiRoutes.url}token/index.php?token=${token}`, {
		method: 'GET',
		Accept: 'application/json',
		'Content-Type': 'application/json'
	});

	if (!resp) {
		return { success: false };
	}
	const dataJson = await resp.json();
	console.log(dataJson)
	if (resp.ok && (resp.status === 200 || resp.status === 201) && !dataJson.error) {
		return { success: true, data: dataJson };
	}	
	return { status: false };
}

export const login = async (params)=>{
	let {username,contrasena} = params
	
	let resp = await fetch(`${ApiRoutes.url}login/index.php?username=${username}&contrasena=${contrasena}`, {
		method: 'GET',
		Accept: 'application/json',
		'Content-Type': 'application/json'
	});

	if (!resp) {
		return { success: false };
	}
	const dataJson = await resp.json();
	if (resp.ok && (resp.status === 200 || resp.status === 201) && !dataJson.error) {
		return { success: true, data: dataJson };
	}	
	return { status: false };
}

export const getUsers = async (params)=>{
	
	let resp = await fetch(`${ApiRoutes.url}users/index.php?&${params}`, {
		method: 'GET',
		Accept: 'application/json',
		'Content-Type': 'application/json'
	});

	if (!resp) {
		return { success: false };
	}
	const dataJson = await resp.json();
	if (resp.ok && (resp.status === 200 || resp.status === 201) && !dataJson.error) {
		return { success: true, data: dataJson };
	}	
	return { status: false };
}

export const addUser = async (params)=>{
	
	let resp = await fetch(`${ApiRoutes.url}users/index.php?`, {
		method: 'POST',
		Accept: 'application/json',
		'Content-Type': 'application/json',
		body : JSON.stringify(params)
	});

	if (!resp) {
		return { success: false };
	}
	const dataJson = await resp.json();
	if (resp.ok && (resp.status === 200 || resp.status === 201) && !dataJson.error) {
		return { success: true, data: dataJson };
	}	
	return { status: false };
}

export const deleteUser = async (id)=>{
	
	let resp = await fetch(`${ApiRoutes.url}users/index.php?`, {
		method: 'DELETE',
		Accept: 'application/json',
		'Content-Type': 'application/json',
		body : JSON.stringify({"id":id})
	});

	if (!resp) {
		return { success: false };
	}
	const dataJson = await resp.json();
	if (resp.ok && (resp.status === 200 || resp.status === 201) && !dataJson.error) {
		return { success: true, data: dataJson };
	}	
	return { status: false };
}

export const editUser = async (params)=>{
	
	let resp = await fetch(`${ApiRoutes.url}users/index.php?`, {
		method: 'PUT',
		Accept: 'application/json',
		'Content-Type': 'application/json',
		body : JSON.stringify(params)
	});

	if (!resp) {
		return { success: false };
	}
	const dataJson = await resp.json();
	if (resp.ok && (resp.status === 200 || resp.status === 201) && !dataJson.error) {
		return { success: true, data: dataJson };
	}	
	return { status: false };
}
