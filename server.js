const express = require('express'),
    session = require('express-session'),
    flash = require('express-flash'),
    parser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),

    port = process.env.PORT || 8000,
    // invoke express and store the result in the variable app
    app = express();

// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public/dist/public')));
// app.set('views', path.join(__dirname, 'views'));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use( function(request, response, next){
    console.log(`requesting url: ${request.url}`);
    next();
})
app.use(session({
    secret:'superSekretKitteh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, 
        maxAge: 600000
    }
}));

//connect to DB
require('./server/config/database');
// require('./server/config/routes')(app);
app.use(require('./server/config/routes')); 

// port
app.listen(port, () => console.log(`Express server listening on port ${port} for Restful Task API`));    // ES6 way