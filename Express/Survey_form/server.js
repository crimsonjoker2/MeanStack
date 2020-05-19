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
//----
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//---- Logic ----

app.get('/', (req, res) => {
    res.render("index");
});
app.get('/results', (req, res) => {
    res.render("results", {form: req.session.form});
});
app.post('/result', (req, res) => {
    req.session.form = req.body
    res.redirect("results", );
});
//----

app.listen(8000, () => console.log("listening on port 8000"));