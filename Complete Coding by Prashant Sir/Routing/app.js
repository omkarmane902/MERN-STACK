const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    }

    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
    }

    else if (req.url === "/users" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify([
            { id: 1, name: "Omkar" },
            { id: 2, name: "Rahul" }
        ]));
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route Not Found");
    }

});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});