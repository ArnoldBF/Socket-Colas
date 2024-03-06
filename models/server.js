const http = require('http');

const express = require('express'); // importamos express
const cors = require('cors'); // importamos cors

// const fileUpload = require("express-fileupload");

class Server {
	constructor() {
		this.app = express(); // creamos una instancia de express
		this.port = process.env.PORT; // process.env.PORT: variable de entorno
		this.server = http.createServer(this.app);
		this.io = require('socket.io')(this.server);

		// Path: models/server.js que hace referencia a usuarios de la carpeat routes
		this.paths = {};
		// Concectar a base de datos
		this.middlewares();
		// Rutas de mi aplicacion
		this.routes();
	}

	middlewares() {
		// CORS
		this.app.use(cors());
		// Lectura y parseo del body
		// this.app.use(express.json());
		// Directorio publico
		this.app.use(express.static('public'));
		// Fileuploads -cargar de archivos
	}

	routes() {
		// this.app.use(this.paths.auth, require('../routes/auth'));
	}

	listen() {
		this.server.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}
}

module.exports = Server;
