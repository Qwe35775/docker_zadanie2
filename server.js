const http = require('http');
const os = require('os');
const url = require('url');

const authorName = 'Dawid Smarzak'; 

//tworzenie serwera
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    //pobranie ip
    const clientIP = req.connection.remoteAddress.replace('::ffff:','');

    // pobranie daty i godziny
    const clientDateTime = new Date().toLocaleString('pl-PL', {
        timeZone: 'Europe/Warsaw' 
    });

    // wyswietlenie danych
    res.end(`<html><body>
        <h1>Witaj ${authorName}!</h1>
        <p>Twoj adres IP: ${clientIP}</p>
        <p>Data i godzina w twojej strefie czasowej: ${clientDateTime}</p>
    </body></html>`);
});

// pobranie portu serwera lub domyslne 8080
const port = process.env.PORT || 8080;

// uruchomienie serwera
server.listen(port, () => {

    // pobranie daty uruchomienia
    const startTime = new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });

    // wyswietlenie w konsoli
    console.log(`Serwer uruchomiony: ${startTime}`);
    console.log(`Autor: ${authorName}`);
    console.log(`Serwer nasłuchuje na porcie: ${port}`);
});
