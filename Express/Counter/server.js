const express = require("express");
const app = express();
//Session info
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

//-----------

app.get('/', (req, response) => {
    if(!req.session.count){
    req.session.count = 1;
    }else{
    req.session.count ++
    }
    response.render('index', {count:req.session.count})
});
app.post('/twice', (req, response) => {
    req.session.count ++
    response.redirect('/')
});
app.post('/reset', (req, response) => {
    req.session.destroy();
    response.redirect('/')
});

//-------------

app.listen(8000, () => console.log("listening on port 8000"));