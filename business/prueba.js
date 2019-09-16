const connetDb = require('./db/connetDb');

var con= new connetDb();

var SQL= "select * from usuario";
con.getListResult("select * from usuario").then(result=>{
    console.log(result);
});
