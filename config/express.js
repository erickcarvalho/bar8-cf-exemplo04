let express = require('express');
let consign = require('consign');

module.exports = function () {

    var app = express();
    
    var ui5Router = require('../app/ui5/ui5Router');
    app.use('/', ui5Router.getRouter(express));

    consign(
        {
            cwd: 'app',
            verbose: false,
            extensions: ['.js', '.json', '.node']
        })
        .then('controller')
        .then('routes')
        .into(app);

    return app;

}