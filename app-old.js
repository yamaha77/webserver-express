const http = require('http');

http.createServer( (req, res) => {

    res.writeHead( 200, {
        'Content-Type': 'application/json'
    });
    let salida = {
        name: 'Jairo',
        years: 28,
        url: req.url
    };
    //res.write('Hello World...!');
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(3000);

console.log('Listening in port 3000..!');


