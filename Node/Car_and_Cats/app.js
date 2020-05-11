const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    //Index page for cars
    if (request.url === '/') {
        fs.readFile('./views/cars.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    //Css for cars
    else if(request.url ==='/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end
        })
    }
    //Images for cars
    else if(request.url ==='/images/car1.jpg'){
        fs.readFile('./images/car1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end;
        })
    }
    else if(request.url ==='/images/car2.jpg'){
        fs.readFile('./images/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end;
        })
    }
    //Cats page
    else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    //Cats images
    else if(request.url ==='/images/cat1.jpg'){
        fs.readFile('./images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end;
        })
    }
    else if(request.url ==='/images/cat2.jpg'){
        fs.readFile('./images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end;
        })
    }
    //New car form page
    else if (request.url === "/cars/new") {
        fs.readFile('./views/newcar.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("listening on port 6789");
