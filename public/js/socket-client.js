// Referencias de html

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const btnEnviar = document.querySelector('#btnEnviar');
const txtMensaje = document.querySelector('#txtMensaje');

// eslint-disable-next-line no-undef
const socketCliente = io();

socketCliente.on('connect', () => {
	// console.log('conectado');
	lblOffline.style.display = 'none';
	lblOnline.style.display = '';
});

socketCliente.on('disconnect', () => {
	// console.log('desconectado');
	lblOnline.style.display = 'none';
	lblOffline.style.display = '';
});

socketCliente.on('enviar-mensaje', (payload) => {
	console.log(payload);
});

btnEnviar.addEventListener('click', () => {
	const mensaje = txtMensaje.value;

	const payload = {
		mensaje,
		id: '123ejemplo',
		fecha: new Date().getTime(),
	};

	socketCliente.emit('enviar-mensaje', payload, (id) => {
		console.log('Enviado al servidor para emitir a los demas desde', id);
	});
});
