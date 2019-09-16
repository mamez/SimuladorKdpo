/*Imports*/
var express    = require('express');
var bodyParser = require('body-parser');
var httpProxy  = require('http-proxy');
var soap       = require('soap');
var path       = require('path');
const session = require('express-session');

/**Configuracion de modulos */
//express
var app = express();
app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, 'kdpo'),
                  path.join(__dirname, 'webseal'),
                  path.join(__dirname, 'admin')]);
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(session({
    secret: 'pibee',
    resave: false,
    saveUninitialized: true
}))

//app.use('/local_pibee/public', express.static(__dirname + 'C:/Desarrollos2/experimental/proxypibee/static-files-dir'))
//app.use('/estilos/version7', express.static('C:/Desarrollos2/experimental/proxypibee/estilisEnet'));
//app.use(express.static('public'));
//app.use('/', express.static('C:/Desarrollos2/experimental/proxypibee/estilisEnet'));
//app.use(express.static('C:/Desarrollos2/experimental/proxypibee/estilisEnet'));
 require("./webseal/webseal")(app,express);
 require("./kdpo/kdpo")(app,express);
 require("./admin/admin")(app,express);
 require("./webseal/junction")(app,express);

 var apiProxy = httpProxy.createProxyServer({});
 //var prueba2= 'http://10.10.20.237:9091';
//funcionalidad kdpo
/*
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, X-Frame-Options');
    if (req.method === "OPTIONS") res.send(200);
    else next();
}
app.use(allowCrossDomain);*/

app.all("/SCOKDPO/kdpo_mult_web/servlet/images/:img", function(req, res){
    res.sendFile(__dirname+"/public/usrer.jpg" );
});



app.listen(3000);







