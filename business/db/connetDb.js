const sqlite3 = require('sqlite3').verbose();

class connetDb{

    constructor(){   
     this.db=new sqlite3.Database(__dirname+'/pibee.db',(err)=>{
         if(err){
             console.log("error al conectar a la base de datos : "+err);
         }else{
             console.log("Conexion pibee.db establecida")
         }
     });
    }

    /**
     * Funcion para insertar, actualizar, eliminar en la base de datos
     * @param {*} sql 
     * @param {*} params 
     */
    executeQuery(sql, params = []){
        return new Promise((resolve, reject)=>{
            this.db.run(sql, params,function(err){
                if(err){
                    console.log("Error al ejecutar la query "+sql);
                    reject(err);
                }else{
                    resolve("OK");
                }
            })
        });
    }

    /**
     * Metodo para obtener un solo resultado
     * @param {*} sql 
     * @param {*} params 
     */
    getSingleResult(sql, params = []){
        return new Promise((resolve, reject)=>{
            this.db.get(sql, params,function(err,result){
                if(err){
                    console.log("Error al ejecutar la query "+sql);
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        }); 
    }

    /**
     * Metodo pata obtener una lista de resultado
     * @param {*} sql 
     * @param {*} params 
     */
    getListResult(sql, params = []){
        return new Promise((resolve, reject)=>{
            this.db.all(sql, params,function(err,result){
                if(err){
                    console.log("Error al ejecutar la query "+sql);
                    reject(err);
                }else{
                    console.log(result);
                    resolve(result);
                }
            })
        }); 
    }
}

module.exports= connetDb;