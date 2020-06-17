const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const newArgv = require('yargs')
    .command('listar', 'Imprime la tabla', opts)
    .command('crear', 'crea archivo', opts)
    .argv;


module.exports = {
    newArgv
}