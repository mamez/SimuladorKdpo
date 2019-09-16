
var soap = require('soap');
var ReadFile= require("../config/readFile");
var conexion=require("../config/conexion");

module.exports = function(app, express){
   
   var ctx= new ReadFile();
   var con= new conexion();

//configuracion de recursos estaticos webseal
app.use('/local_pibee/public', express.static(__dirname + '/public'));

//Funcionalidades
app.all("/", function(req, res) {
    return res.redirect('/local_pibee/KDPOSolicitarCredenciales_es.html');
});

app.get('/local_pibee/error', function (req, res) {
   res.render('error');
});

app.get('/local_pibee/KDPOSolicitarCredenciales_es.html', function (req, res) {
   let sql="select * from usuarios";
   con.executeQuery(sql)
      .then((usuarios)=>{
         res.render('KDPOSolicitarCredenciales_es',{users:usuarios});
      }).catch((err)=>{
         console.log("error: "+e);
      });
});

app.get('/webseal/usuario/:userId',(req,res)=>{
   var userId = req.params.userId;
   let sql ="select * from usuarios where usuario = ?";
   con.getSingleResult(sql,userId)
         .then((usuario) => {
            res.send(usuario);
       }).catch((err) => {
            console.log("exception error " + err +" errore e" + e);
   });


 });
  

app.post('/DFAUTH/slod_mult_web/DFServlet', function(req, res) {
   let eai_user= req.body.eai_user;
   let eai_URLDestino= req.body.eai_URLDestino;
   let origen= req.body.origen;
   let cod_emp= req.body.cod_emp;
   var cod_usu= req.body.cod_usu;
   let args = { usuario: eai_user, password: '111111111'  };
   if(origen=='pibee'){
     
   }

   soap.createClient("http://172.17.85.245:6211/kdgu_mult_web/services/InformacionUsuarios?wsdl", function(err, client) {
      client.InformacionUsuariosService.InformacionUsuarios.validarAccesoPortal(args,(err, result, Ast)=>{
         if(err){
            //error en el cliente de webservices
         }else{
            var respuesta= result.RespuestaAcceso.Respuesta.codRetorno;
            var acceso=result.RespuestaAcceso.Acceso.idSesionAst;
            if(respuesta=='IU0900'){
               req.session.userInfo = {
                  'cod_emp': cod_emp,
                  'cod_usu': cod_usu,
                  'eai_user': cod_usu,
                  'ast':acceso
               }
               res.redirect(eai_URLDestino);
            }else{
                //error login
            }
           //}
         }
          console.log();
      });
  });
     
    
 /*  
     var username= req.body.username;
     var eai_password= req.body.eai_password;
   
     var idioma=req.body.idioma;
    
        if(origen=='pibee'){
          //logica de negocio
          res.redirect(eai_URLDestino);
      }*/
   });




  
}


