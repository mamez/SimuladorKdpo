var ReadFile= require("../config/readFile");
var conexion=require("../config/conexion");
module.exports = function(app, express){

    //configuracion de recursos estaticos webseal
    app.use('/kdpo/public', express.static(__dirname + '/public'));
    var ctx= new ReadFile();
    var con= new conexion(); 

    app.all("/SCOKDPO/kdpo_mult_web/servlet/PIBEE", function(req, res) {
        if(req.session.userInfo){
            let sql="select m.nombre, om.* from menu m , opciones_menu om WHERE m.menu_id = om.menu_id ORDER BY om.menu_id";
            menu_array=[];
            con.executeQuery(sql)
                .then((resp)=>{
                    var cont= 0;
                    var menu={};
                    var funcionalidad=[];
                    resp.forEach(item => {
                        if(cont==0){
                            cont=item.menu_id;
                            menu.opcion=item.nombre;
                            let f={
                                action:item.action, 
                                opcion_name:item.opcion_name,
                                pb_cod_produc: item.pb_cod_produc,
                                pb_cod_serv :item.pb_cod_serv,
                                pb_cod_proc : item.pb_cod_proc,
                                pb_url :item.pb_url
                            }; 
                            funcionalidad.push(f);
                        }else{
                            if(cont == item.menu_id){
                                let f={
                                    action:item.action, 
                                    opcion_name:item.opcion_name,
                                    pb_cod_produc: item.pb_cod_produc,
                                    pb_cod_serv :item.pb_cod_serv,
                                    pb_cod_proc : item.pb_cod_proc,
                                    pb_url :item.pb_url
                                }; 
                                funcionalidad.push(f);
                            }else{
                                menu.funcionalidad=funcionalidad;
                                menu_array.push(menu);
                                funcionalidad=[];
                                menu={};
                                cont=item.menu_id;
                                menu.opcion=item.nombre;
                                let f={
                                    action:item.action, 
                                    opcion_name:item.opcion_name,
                                    pb_cod_produc: item.pb_cod_produc,
                                    pb_cod_serv :item.pb_cod_serv,
                                    pb_cod_proc : item.pb_cod_proc,
                                    pb_url :item.pb_url
                                }; 
                                funcionalidad.push(f);
                            }
                        }  
                    });
                    menu.funcionalidad=funcionalidad;
                   menu_array.push(menu);
                   res.render('menu',{"context":req.session.userInfo,"menu":menu_array});
                }).catch((err)=>{
                    console.log("Error al ejecutar selec "+err)
                }); 
            
        }
        
    });
    
    
    }