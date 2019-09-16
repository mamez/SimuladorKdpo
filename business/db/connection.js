const sqlite3 = require('sqlite3').verbose();
module.exports= function(){
        console.log();
        return new sqlite3.Database(__dirname+'/pibee.db', (err) => {
            if (err) {
              console.error(err.message);
            }
            console.log('Connected to the chinook database.');
          });
}