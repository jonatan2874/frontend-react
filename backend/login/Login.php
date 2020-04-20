<?php

	class Login{
		private $UsuarioDb    = 'root';
		private $PasswordDb   = '';
		private $ServidorDb = 'localhost';
		private $NameDb     = 'frontend_test';

		public function __construct(){
			$this->conexion();
		}

		public function conexion(){
			$this->mysql = mysqli_connect(
			                       $this->ServidorDb,
			                       $this->UsuarioDb,
			                       $this->PasswordDb,
			                       $this->NameDb
							   );
			if (!$this->mysql) {
				$this->apiResponse(array('status' => false,'data'=> 'Error al conectar a la base de datos'));
			}
		}

		public function show($data){
			$arrayResponse = array('status'=>true, 'data' =>'success' );
		}

		public function apiResponse($response){
			$http_response_code = array(
				100 => 'Continue',
				101 => 'Switching Protocols',
				200 => 'OK',
				201 => 'Created',
				202 => 'Accepted',
				203 => 'Non-Authoritative Information',
				204 => 'No Content',
				205 => 'Reset Content',
				206 => 'Partial Content',
				300 => 'Multiple Choices',
				301 => 'Moved Permanently',
				302 => 'Found',
				303 => 'See Other',
				304 => 'Not Modified',
				305 => 'Use Proxy',
				306 => '(Unused)',
				307 => 'Temporary Redirect',
				400 => 'Bad Request',
				401 => 'Unauthorized',
				402 => 'Payment Required',
				403 => 'Forbidden',
				404 => 'Not Found',
				405 => 'Method Not Allowed',
				406 => 'Not Acceptable',
				407 => 'Proxy Authentication Required',
				408 => 'Request Timeout',
				409 => 'Conflict',
				410 => 'Gone',
				411 => 'Length Required',
				412 => 'Precondition Failed',
				413 => 'Request Entity Too Large',
				414 => 'Request-URI Too Long',
				415 => 'Unsupported Media Type',
				416 => 'Requested Range Not Satisfiable',
				417 => 'Expectation Failed',
				500 => 'Internal Server Error',
				501 => 'Not Implemented',
				502 => 'Bad Gateway',
				503 => 'Service Unavailable',
				504 => 'Gateway Timeout',
				505 => 'HTTP Version Not Supported',
			);
			
			header('Content-Type: application/json; charset=utf-8');
			if (is_array($response['data'])) {
				foreach ($response['data'] as $key => $arrayResult) {
					if (is_array($arrayResult)) {
						foreach ($arrayResult as $campo => $valor) {
							if (!is_array($valor)) {
								$response['data'][$key][$campo]=utf8_encode($valor);
							}
	
						}
					}
				}
			}
			// print_r($_SERVER);
			$json_response = json_encode($response['data']);
			echo $json_response;
			exit;
		}

	}

	

	// include '../config/conectar.php';
	// include '../config/define_variables.php';

	// $sql   = "SELECT id,documento,nombre,rol FROM users WHERE user_name='$user' AND password='$password' ";
	// $query = mysqli_query($mysql,$sql);
	// $result = $query->fetch_assoc();
	// if ($result==NULL) {
	// 	header('Location: ../../sign-in.php?error=Datos incorrectos');
	// }
	// else{
    // 	if(!session_start()){session_start();}
	// 	$_SESSION['IDUSUARIO']        = $result ['id'];
	// 	$_SESSION['DOCUMENTOUSUARIO'] = $result ['documento'];
	// 	$_SESSION['NOMBREUSUARIO']    = $result ['nombre'];
	// 	$_SESSION['ROLUSUARIO']       = $result ['rol'];
	// 	header('Location: ../../index.php');
	// 	// if (!isset($_SESSION['IDUSUARIO'])){ header('Location: sign-in.php');  }
	// 	// var_dump($result);
	// }



?>