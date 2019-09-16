function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}
 

$( document ).ready(function() {
    var key=getUrlParam("msg","nok");
    if(key != "nok"){
       var valueMensaje=  mensaje[key];
       var clase="bg-danger";
       if(key.includes("m")){
           clase="bg-info";
       }
       $("#alerta").removeClass("hidden").addClass(clase); 
       $("#msgValue").after(valueMensaje);
    }
});

function close(){
    $("#alerta").addClass("hidden"); 
}