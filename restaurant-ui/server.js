const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV === "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const cors = require('cors');
const config = require('./config/config.json');
const port = config.port || 8081;



app.prepare().then(() => {
    const server = express();
    server.use(cors({ origin: [/\localhost:8081$/] }));
    server.disable('x-powered-by');
    server.use('/assets', express.static('static'));

    server.get("*", (req, res) => {
        return handle(req, res);
    });
    server.post("*", (req, res) => {
        return handle(req, res);
    });
    server.listen(port, err => {
        console.log("server Listing on port: ", port)
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
})