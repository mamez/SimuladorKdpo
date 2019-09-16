var conn= require("./db/connection");

module.exports= function(){

this.getAllUser= ()=>{
    return new Promise((resolve, reject)=> {
        let con=conn();
        con.all('select * from usuario',(err, rows)=>{
            resolve(rows);
        });
        con.close();
    });
}

this.getUserBycod= (id)=>{
     let sql = 'select * from usuario where usuario = ?';
     return new Promise((resolve, reject)=>{
        let con=conn();
        con.get(sql,id,(err,row)=>{
            if(err){
                reject(err);
            }
            resolve(row);
        });
        con.close();
     });
}


this.createUser= (usuario)=>{
    let sql= "INSERT INTO usuario (usuario, password, referencia)VALUES(?, ?, ?)";
    let con=conn();
    return new Promise((resolve, reject)=>{
        con.run(sql,[usuario.usuario,usuario.password,usuario.referencia],(err)=>{
          if(err){
              reject(err);
          }
          resolve('OK');
        });
        con.close();
    });
}

this.updateUser= (usuario)=>{
    let sql = "UPDATE usuario  SET  usuario=?, password=?, referencia=? WHERE id = ? ";
    let con=conn();
    return new Promise((resolve, reject)=>{
        con.run(sql,[usuario.usuario,usuario.password,usuario.referencia, usuario.id],(err)=>{
            if(err){
                reject(err)
            }
            resolve('ok');
        });
        con.close();
    });
}


this.deleteUser= (id)=>{
    let sql = "DELETE FROM usuario WHERE id = ?";
    let con=conn();
    return new Promise((resolve, reject)=>{
        con.run(sql,id,(err)=>{
            if(err){
                reject(err)
            }
            resolve('ok');
        });
        con.close();
    });
}

}







