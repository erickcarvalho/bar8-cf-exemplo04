var app = require('./config/express')();
var config = require('./config/environment');

app.listen(config.port, function () {
    console.log('Dont Panic - Sua aplicação de ML está no ar!');
});