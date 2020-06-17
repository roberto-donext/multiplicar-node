const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar.js');

const  { newArgv } = require('./config/yargs');

const colors = require('colors');



let comando = newArgv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(newArgv.base, newArgv.limite);
        break;
    case 'crear':
        crearArchivo(newArgv.base).then(archivo => console.log(`archivo creado ${archivo}`)).catch((err) => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
        break;

}


let arv = process.argv;
let parametro = arv[2];
let base = parametro.split('=')[1];