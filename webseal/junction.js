const httpProxy = require('http-proxy');
const ReadFile= require("../config/readFile");
const conexion= require('../config/conexion');
module.exports= function(app,express){
    var apiProxy = httpProxy.createProxyServer({});
    var con= new conexion();

    //disparador de cabeceras
    apiProxy.on('proxyReq', function(proxyReq, req, res, options) {
        let user=req.session.userInfo;
        let scodlogon= "00260082"+user.cod_emp+user.cod_usu;
        proxyReq.setHeader('s_cod_logon',scodlogon);
        proxyReq.setHeader('s_password','1111111111');
        proxyReq.setHeader('s_IdClienteExt',user.cod_usu);
        proxyReq.setHeader('iv-user', scodlogon);
        proxyReq.setHeader('iv-groups',scodlogon);
        proxyReq.setHeader('iv-id_sesion_ast',user.ast);
        proxyReq.setHeader('iv-remote-address','10.10.20.97');
        proxyReq.setHeader('iv-cod_emp',user.cod_emp);
        proxyReq.setHeader('iv-cod_usu',user.cod_usu);
        proxyReq.setHeader('iv-cod_canal','0026');
        proxyReq.setHeader('iv-cod_ban_int','0082');
        proxyReq.setHeader('Referer','http://localhost:9081/BancaEmpresasWeb/principal2.html');
        console.log(req.url);
        let contype = req.headers['content-type'];
        if(typeof contype != 'undefined' && contype.indexOf("multipart") > -1){
          console.log("----------------------------->  MultiPart");
        }else{

              if (req.body) {  
                console.log("----------------------------->  application/x-www-form-urlencoded");
                  let body = req.body;
                    body = Object.keys(body)
                    .map(function(key) {
                      return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
                    })
                    .join('&');
                  proxyReq.setHeader('content-type', 'application/x-www-form-urlencoded');
                  proxyReq.setHeader('content-length', body.length);
                  //console.log(body);
                  proxyReq.write(body);
              }
              proxyReq.end();
              //console.log('add cab')
        }

      });

      apiProxy.on('error', function(err, req, res) {
        return res.redirect('/local_pibee/error');
    });
    
   
  con.executeQuery('select * FROM juction')
    .then((res1)=>{
      res1.forEach(item=>{
        app.all(item.filter, function(req, res) {
          let replaceValue=item.filter.replace("*", "");
          let url= req.url.replace(replaceValue, "");
          console.log(url);
          req.url= url;
          app.use(express.static(item.static_junction));
            try{
             apiProxy.web(req, res, {target: item.server});
            }catch(ex){
             res.send("<h1>servicio temporal mente jodido</h1>");
            } 
      });
      });
    });


     /*ctx.getPropertiFile("junction.json").then(data =>{
      data.forEach(junction => {
       app.all(junction.filter, function(req, res) {
           let body = req.body;
           let replaceValue=junction.filter.replace("*", "");
           let url= req.url.replace(replaceValue, "");
           console.log(url);
           req.url= url;
           let static=junction.static_content;
           static.forEach(item =>{
             console.log("remote"+item.route_remote);
             app.use(express.static(item.route_local));
             try{
              apiProxy.web(req, res, {target: junction.server});
             }catch(ex){
              res.send("<h1>servicio temporal mente jodido</h1>");
             }
            
           })
          
       });
      });
    }); */

}