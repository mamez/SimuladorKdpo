
const path = require('path');
const conexion= require('../config/conexion');
const userjson= require('../config/user.json');
const util = require('util');
const methodOverride = require('method-override');

module.exports = function(app, express){


    const CONTEXT_ROOT="/admin";
    const REDIRECT_USER_VIEWS=CONTEXT_ROOT+"/user";
    const REDIRECTID =REDIRECT_USER_VIEWS+"/:id";
    const REDIRECT_MENU_VIEWS =CONTEXT_ROOT+"/menu";
    const REDIRECT_MENU_ID=REDIRECT_MENU_VIEWS+"/:id";
    const REDIRECT_MENUS_VIEWS=CONTEXT_ROOT+"/menus";
    const REDIRECT_JUNCTION_VIEWS =CONTEXT_ROOT+"/junction";
    const REDIRECT_JUNCTION_ID=REDIRECT_JUNCTION_VIEWS+"/:id";
    const GET_ALL_MENUS=CONTEXT_ROOT+"/menus/all";

    

app.use('/admin/public', express.static(__dirname + '/public'));
app.use('/admin/admin/public', express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

app.get(CONTEXT_ROOT,function(req, res){
    res.render('admin',{vista:"index.ejs"});
});

//metodo get usuario

app.get(REDIRECT_USER_VIEWS,function(req, res){
    var con= new conexion(); 
    let sql="select * from usuarios";
    con.executeQuery(sql)
       .then((resp)=>{
           var cont= 0;    
           var usuario=[];
            resp.forEach(item=>{
            cont= item.usuario_id
            if(cont==1){
                let f={
                    usuario_id:item.usuario_id,
                    usuario:item.usuario, 
                    referencia:item.referencia,
                    password:item.password,
                };
                usuario.push(f);
            }else{
                if (cont==item.usuario_id) {
                    let f={
                        usuario_id:item.usuario_id,
                        usuario:item.usuario, 
                        referencia:item.referencia,
                        password:item.password,
                    };
                    usuario.push(f);
                };
            };
            });
       //    console.log(util.inspect(usuario, {depth: null}));
           res.render('admin',{vista:"usuarios.ejs", usuarios:usuario});
       }).catch((err)=>{
           console.log("Error al ejecutar selec "+err)
       }); 
});

/// metodo get  id usuario

app.get(REDIRECTID,function(req, res){
    var con=new conexion();
   
    let id = req.params.id;
   // console.log(util.inspect(req.params, {depth: null}));
    var usuario2=[];
    con.executeQuery("select * from usuarios where usuario_id = ?",[id]).then((resp)=>{
        resp.forEach(item=>{
            let object={
                usuario_id:item.usuario_id,
                usuario:item.usuario, 
                referencia:item.referencia,
                password:item.password,
            };
             usuario2.push(object)
        });       
        
        
        res.render('admin',{vista:"usuarios.ejs", usuario2:usuario2});
       
    }).catch((err)=>{
        console.log("Error al ejecutar selec "+err)
    });
});

///metodo post usuario

app.post(REDIRECT_USER_VIEWS,function(req, res){
    var con= new conexion(); 
    con.update("INSERT INTO usuarios(usuario, referencia, password) VALUES(?, ?, ?)",[req.body.usuario,req.body.referencia,req.body.password]).then((resp)=>{
        res.redirect(REDIRECT_USER_VIEWS+"?msg=m1");
     }).catch((err)=>{
      console.log(err);
     });
});


//metodo put  usuario
app.put(REDIRECTID,function(req, res){
    var con= new conexion(); 
   // console.log(util.inspect(req.body, {depth: null}));
   // console.log(util.inspect(req.params, {depth: null}));
    let id = req.params.id;
    let sql="select * from usuarios";
     con.executeQuery(sql)
        .then((res1)=>{
            res1.forEach(item=>{
                if (item.usuario_id ==id) {
                    con.update("update usuarios  set usuario = ? , referencia = ? ,password = ? WHERE usuario_id = ?",[req.body.usuario,req.body.referencia,req.body.password,req.params.id]).then((resp)=>{
                        res.redirect(REDIRECT_USER_VIEWS+"?msg=m2");
                       }).catch((err)=>{
                      console.log(err);
                     });
                }
            });
        });
});

//metodo delete ususario

app.delete(REDIRECTID,function(req, res){
    let userId = req.params.id;
    var con= new conexion(); 
//    console.log(util.inspect(userId, {depth: null}));
    let sql="select * from usuarios";
    con.executeQuery(sql)
        .then((respt)=>{
            respt.forEach(item1 =>{
                if (item1.usuario_id ==userId) {
                    con.update("delete from usuarios where usuario_id = ?",[userId]).then((resp)=>{
                        res.redirect(REDIRECT_USER_VIEWS+"?msg=m3");
                     }).catch((err)=>{
                      console.log(err);
                     }); 
                }
            });
        }).catch((err)=>{
            console.log(err);
           });
    
});


//////////////////////////////Controladores Menu

//// metodo get menu

app.get(REDIRECT_MENU_VIEWS, function(req, res) {
    var con= new conexion(); 
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
                        menu.menu_id=item.menu_id;
                        menu.opcion=item.nombre;
                        let f={
                            opcion_id:item.opcion_id,
                            menu_id:item.menu_id,
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
                                opcion_id:item.opcion_id,
                                menu_id:item.menu_id,
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
                            menu.menu_id=item.menu_id;
                            let f={
                                opcion_id:item.opcion_id,
                                menu_id:item.menu_id,
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
             // console.log(util.inspect(menu_array, {depth: null}));
               res.render('admin',{vista:"menu.ejs",menus:menu_array});
               
            }).catch((err)=>{
                console.log("Error al ejecutar selec "+err)
            }); 
        
    
    
});


//metodo get  opciones menu

app.get(REDIRECT_MENUS_VIEWS,function (req,res){
 
     var con = new conexion();

     var sql = "select * from menu";
     var lista = []
     var cont= 0;
     con.executeQuery(sql)
         .then((resp)=>{
            
           resp.forEach(item => {
               cont=item.menu_id;
               
                let menu={
                    menu_id:item.menu_id,
                    nombre:item.nombre, 
                }; 
                lista.push(menu)
            });
            
       // console.log(util.inspect(lista, {depth: null})); 
        res.render('admin',{vista:"menus.ejs",menu2:lista});        
         }).catch((err)=>{
         console.log(err)
         });
});



/// metodo post opcion menu
app.post(REDIRECT_MENU_VIEWS, function(req, res) {
    var con= new conexion();
   // console.log(util.inspect(req.body, {depth: null}));
   // console.log(util.inspect(req.params, {depth: null}));
    con.update("INSERT INTO menu(nombre) VALUES(?)",[req.body.nombre]).then((resp)=>{
        res.redirect(REDIRECT_MENUS_VIEWS+"?msg=m4");
     }).catch((err)=>{
      console.log(err);
     });
});

// metodo post  menu
app.post(REDIRECT_MENUS_VIEWS, function(req, res) {
   
    var con= new conexion();
    //console.log(util.inspect(req.body, {depth: null}));
    //console.log(util.inspect(req.params, {depth: null}));
   
    con.update("INSERT INTO opciones_menu(menu_id, action, opcion_name,pb_cod_produc,pb_cod_serv,pb_cod_proc,pb_url) VALUES(?, ?, ?,?,?,?,?)",
    [req.body.menu_id,req.body.action,req.body.opcion_name,req.body.pb_cod_produc,req.body.pb_cod_serv,req.body.pb_cod_proc,req.body.pb_url]).then((resp)=>{
           res.redirect(REDIRECT_MENU_VIEWS+"?msg=m4");
     }).catch((err)=>{
      console.log(err);
     });
});

//// metodo put menu
app.put(REDIRECT_MENU_ID,function(req, res){
   
    var con= new conexion(); 
   // console.log(util.inspect(req.body, {depth: null}));
   // console.log(util.inspect(req.params.id, {depth: null}));
    let id = req.params.id;
    let sql="select * from opciones_menu";
     con.executeQuery(sql)
        .then((res1)=>{
            res1.forEach(item=>{
                if (item.opcion_id ==id) {
                    con.update("update opciones_menu  set menu_id = ? , action = ? , pb_cod_produc=?, pb_cod_serv=?,pb_cod_proc=?,pb_url=? WHERE opcion_id = ?",
                    [req.body.menu_id,req.body.action,req.body.pb_cod_produc,req.body.pb_cod_serv,req.body.pb_cod_proc,req.body.pb_url,req.params.id]).then((resp)=>{
                        res.redirect(REDIRECT_MENU_VIEWS+"?msg=m5");
                       }).catch((err)=>{
                      console.log(err);
                     });
                }

            });
        });
});


////metodo delete menu
app.delete(REDIRECT_MENU_ID,function(req, res){
    let menuId = req.params.id;
    var con= new conexion(); 
    let sql="select * from opciones_menu ";
    con.executeQuery(sql)
        .then((respt)=>{
              respt.forEach(item1 =>{
                  if (item1.opcion_id ==menuId) {
                    con.update("delete from opciones_menu  where opcion_id = ?",[menuId]).then((resp)=>{
                       
                        res.redirect(REDIRECT_MENU_VIEWS+"?msg=m6");
                     }).catch((err)=>{
                      console.log(err);
                     }); 
                }
            });
        }).catch((err)=>{
            console.log(err);
           });
    
});
    
    
//////////////JUNCTION///////////


//merodo get junction

app.get(REDIRECT_JUNCTION_VIEWS,function(req, res){
    var con= new conexion(); 
    let sql="select * FROM juction";
    con.executeQuery(sql)
       .then((resp)=>{
           var cont= 0;    
           var junction=[];
            resp.forEach(item=>{
            cont= item.juction_id
            if(cont==1){
                let f={
                    juction_id:item.juction_id,
                    name:item.name, 
                    filter:item.filter,
                    server:item.server,
                    static_junction:item.static_junction
                };
                junction.push(f);
            }else{
                if (cont==item.juction_id) {
                    let f={
                        juction_id:item.juction_id,
                        name:item.name, 
                        filter:item.filter,
                        server:item.server,
                        static_junction:item.static_junction
                    };
                    junction.push(f);
                };
            };
            });
       //    console.log(util.inspect(usuario, {depth: null}));
           res.render('admin',{vista:"junction.ejs", junctions:junction});
       }).catch((err)=>{
           console.log("Error al ejecutar selec "+err)
       }); 
});




// metodo post  junction
app.post(REDIRECT_JUNCTION_VIEWS, function(req, res) {
    
    var con= new conexion();
    //console.log(util.inspect(req.body, {depth: null}));
    //console.log(util.inspect(req.params, {depth: null}));
  
    con.update("INSERT INTO juction(juction_id, name, filter,server,static_junction) VALUES(?,?,?,?,?)",[req.body.junction_id,req.body.name,req.body.filter,req.body.server,req.body.static_junction]).then((resp)=>{
        
        res.redirect(REDIRECT_JUNCTION_VIEWS);
     }).catch((err)=>{
      console.log(err);
     });
});




//// metodo put junction
app.put(REDIRECT_JUNCTION_ID,function(req, res){
  
    var con= new conexion(); 
  //  console.log(util.inspect(req.body, {depth: null}));
  //  console.log(util.inspect(req.params.id, {depth: null}));
    let id = req.params.id;
    let sql="select * from juction";
     con.executeQuery(sql)
        .then((res1)=>{
            res1.forEach(item=>{
                if (item.juction_id ==id) {
                    con.update("update juction  set  name = ? , filter=?, server=? , static_junction=? WHERE juction_id = ?",
                    [req.body.name,req.body.filter,req.body.server,req.body.static_junction,req.params.id]).then((resp)=>{
                        res.redirect(REDIRECT_JUNCTION_VIEWS);
                       }).catch((err)=>{
                      console.log(err);
                     });
                }
            });
        });
});

////metodo delete junction
app.delete(REDIRECT_JUNCTION_ID,function(req, res){
    let juctionId = req.params.id;
    var con= new conexion(); 
    let sql="select * from juction ";
    con.executeQuery(sql)
        .then((respt)=>{
              respt.forEach(item1 =>{
                  if (item1.juction_id ==juctionId) {
                    con.update("delete from juction  where juction_id = ?",[juctionId]).then((resp)=>{
                  
                        res.redirect(REDIRECT_JUNCTION_VIEWS);
                     }).catch((err)=>{
                      console.log(err);
                     }); 
                }
            });
        }).catch((err)=>{
            console.log(err);
           });
});

app.get(REDIRECT_MENUS_VIEWS+"/:id([0-9]*)",function(req,resp){
    let id = req.params.id;
    let con= new conexion();
    let sql="SELECT COUNT(*) as total FROM opciones_menu WHERE menu_id=?"; 
    con.getSingleResult(sql,[id])
    .then((row)=>{
        resp.send(row);
    }).catch((err)=>{
        console.log(err);
      })
    });

   app.delete(REDIRECT_MENUS_VIEWS+"/:id",function(req,resp){
    let id = req.params.id;
    let con= new conexion();
    let sql="DELETE FROM menu WHERE menu_id = ?";
     con.update(sql,[id])
     .then((respuesta)=>{
         let statusAccion={
             status:respuesta
         };
        resp.send(statusAccion);
     })
     .catch((err)=>{
        console.log(err);
     })
   });

   app.get(GET_ALL_MENUS,function(req,resp){
    let con= new conexion();
    let sql="SELECT * FROM  menu"; 
    con.executeQuery(sql)
    .then((respuesta)=>{
           resp.send(respuesta);
        })
    .catch((err)=>{
            console.log(err);
         })
   });

};
