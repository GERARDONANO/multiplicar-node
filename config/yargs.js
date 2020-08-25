
const opts = {
    base: {
        alias: 'b',
        demand: true
     },
     limite: {
        alias: 'l',
        default: 10
     }
}

const argv = require('yargs')
            .command( 'listar','Imprime en consola la tabla de multiplicar', opts )
            .command( 'crear','Genera un archivo.txt con la tabla de multiplicar ', opts )
            .argv;


module.exports = {
    argv
}