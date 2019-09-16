function direccion(){
	var dominio = "https://www.bbvanetcash.com.co/";
	var eai = "DFAUTH/slod_mult_web/DFServlet";
	var dir = dominio + eai;
	document.forms[0].action=dir;
}
function redire(){
	 			top.location = 'https://www.bbvanetcash.com.co/local_pibee/login_pibee.html';
}
function redireError(){
	 			top.location = 'https://www.bbvanetcash.com.co/local_pibee/logout_pibee_prev_error.html';
}
