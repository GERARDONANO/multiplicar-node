const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch( comando ){

   case 'listar':
      listarArchivo( argv.base, argv.limite );
   break;

   case 'crear':
      crearArchivo( argv.base, argv.limite )
      .then( archivo => console.log( ' archivo creado : ' + colors.green( archivo )) )
      .catch( e => console.log('EEE',e )); 
   break;

   default:
      console.log('Comando no reconocido');

}


module.exports = {
  limite :  argv.limite
}




// let parametro = argv[2];
// let base = parametro.split('=')[1];


 

//  console.log(base);