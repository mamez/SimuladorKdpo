var carLetras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var carNumeros = "0123456789";

function init(max, form) 
{              
	
}                 

document.write("<script type='text/javascript' src='/local_pibee/public/js/cookie.js'></script>");

function fSelecIdioma() {
	
 	if (document.rmcf.idioma.options[0].selected)
 	{
 		setCookie('COD_IDIOMISO','es');
 		parent.location.href="KDPOSolicitarCredenciales_es.html";
 	}
 	if (document.rmcf.idioma.options[1].selected)
 	{
 		setCookie('COD_IDIOMISO','en');
 		parent.location.href="KDPOSolicitarCredenciales_es.html";
	}
	
}

function abrirIdioma()
{
	idioma = getCookie('COD_IDIOMISO');

	if (idioma == null){
		setCookie('COD_IDIOMISO','es');
	}
		
	idioma = getCookie('COD_IDIOMISO');
	if(idioma=='es'){
		top.frames['centro'].location.href ="idioma_es.html";
	}else if (idioma=='en'){
		top.frames['centro'].location.href ="idioma_en.html";
	}
}

document.write("<script type='text/javascript' src='/local_pibee/public/js/cookie.js'></script>");

function validarFormulario() {
	
	var f = document.logon;
	var correcto = true;	
	if(f.cod_emp.value=="")
	{
		//alert("Debe introducir el codigo de referencia");
		f.cod_emp.focus();		
		correcto=false;
	} 	
	 
	 else if (!valido(f.cod_emp.value, carNumeros))
	{
		//alert("El codigo de referencia solo admite caracteres numuricos.");
		f.cod_emp.focus();		
		correcto = false;			
	} 

	if (correcto)
	{
		if(f.cod_usu.value=="")
		{
			//alert("Debe introducir el codigo de usuario");
			f.cod_usu.focus();
			correcto=false;
		}else if (f.cod_usu.length > 8 || f.cod_usu.length <2)
		{
			//alert("El codigo de usuario no es valido");
			f.cod_usu.focus();
			correcto = false;
		} else if (!valido(f.cod_usu.value, carLetras + carNumeros))
		{
			//alert("El codigo de usuario solo admite caracteres alfanumuricos. No admite los caracteres , ni el espacio, ni caracteres especiales");
			f.cod_usu.focus();
			correcto = false;			
		} 
	}

	if (correcto)
	{
	if (correcto)
	
		f.cod_emp.value = f.cod_emp.value.toUpperCase();
		 f.cod_usu.value = f.cod_usu.value.toUpperCase();
		 //alert("4"+correcto);
		f.eai_URLDestino.value = "/SCOKDPO/kdpo_mult_web/servlet/PIBEE?OPERACION=INICIO_PORTAL&LOCALE=ES_CO";
		//alert("2"+correcto);
		canal = "0026";
		bancoInt = "0082";
		f.eai_user.value = canal + bancoInt + f.cod_emp.value + f.cod_usu.value;
		
		f.idioma.value = "ES";
		
		return true;
		
	}else
	{
	    return false;
	}
 	
}

function valido(cadena, caracteres){

	var longitud = cadena.length;

	var correcto = true;

	i = 0;

	while (i<longitud && correcto){

		temp = cadena.substring(i, i+1);

		if(caracteres.indexOf(temp,0)==-1 )

			correcto = false;

		else

			i++;

	}

	

	if (correcto)

		return true;

	else

		return false;

}


function aceptarlogin(idioma)
{
	NS4 = (document.layers)?true:false;
	DOM = (document.getElementById)?true:false;
	IE4 = (document.all)?true:false;
	if(idioma=="es"){
		dinarama="(Accediendo)";
		if (IE4)
		{
			capaboton=seeboton;
			capaboton.innerHTML=dinarama;
			setInterval(EsperePleaseEsp, 150);
		}
		else if (DOM)
		{
			capaboton = document.getElementById('seeboton');
			capaboton.innerHTML=dinarama;
			setInterval(EsperePleaseEsp, 150);
		}
	}else if (idioma=="en"){
		dinarama="(Acceding)";
		if (IE4)
		{
			capaboton=seeboton;
			capaboton.innerHTML=dinarama;
			setInterval(EsperePleaseIng, 150);
		}
		else if (DOM)
		{
			capaboton = document.getElementById('seeboton');
			capaboton.innerHTML=dinarama;
			setInterval(EsperePleaseIng, 150);
		}
	}
}
	
function EsperePleaseEsp()
{
	(dinarama=="(((((Accediendo)))))")? dinarama="(Accediendo)" : dinarama="("+dinarama+")"
		capaboton.innerHTML=dinarama;
}

function EsperePleaseIng()
{
	(dinarama=="(((((Acceding)))))")? dinarama="(Acceding)" : dinarama="("+dinarama+")"
	capaboton.innerHTML=dinarama;
}

function traducirIdiomaSlod(idioma)
{
	if(idioma == "es")
	{
		return "CAS";
	}
	else if (idioma == "en")
	{
		return "ING";
	}
}

function accesoSeguro(campo)
{
	if(campo.checked)
		tvOpen();
	else
		tvClose();
}
