const http = require('http');
const fs = require('fs/promises');

const PORT = 5000;

const requestListener = async (request, response) => {
    const { url } = request;

    if(url === '/index.html') { // http://localhost:5000/index.html
        try {
            const data = await fs.readFile('./views/index.html', 'utf-8');
            response.statusCode = 200;
            response.end(data);
        } catch (error) {
            response.statusCode = 404;
            response.end();
        }
    } else {
        response.statusCode = 404;
        response.end();
    }
}
const server = http.createServer(requestListener);

server.listen(PORT);

/*

Задача: коли приходить запит на url
/style.css
Ми читаємо файл style.css і відпарвляємо його у відповідь

*/