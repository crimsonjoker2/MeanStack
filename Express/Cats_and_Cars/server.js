const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.get('/', (request, response) => {
    response.send("Hello Express");
});
app.get('/cars', (request, response)=>{
    response.render('cars')
});
app.get('/cats', (request, response)=>{
    response.render('cats')
});
app.get('/cats/1', (request, response)=>{
    let cats_details=[
        {name: 'Mumsy', age: '7'},
        {name: 'Poppy', age: '5'} 
    ]
    response.render('details',{cats: cats_details})
});
app.get('/cars/new', (request, response)=>{
    response.render('newcar')
});

app.listen(8000, () => console.log("listening on port 8000"));