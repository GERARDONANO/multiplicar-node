const fs = require('fs');
const colors = require('colors');

let listarArchivo = ( base, limite ) => {

    console.log('====================='.green);
    console.log(`====== tabla de ${ base } ======`.bgBlue);
    console.log('====================='.green);
       

        for( let i = 1 ; i <= limite; i++ ){
    
            let resultado = `${ base } * ${ i } = ${ base * i }`;
    
            console.log(resultado );
        }
        

}

let crearArchivo = async ( base, limite = 10 ) => {
    
    
    let data = '';

    return new Promise( ( resolve, reject ) => {


        if( isNaN( base ) ){
            reject( 'necesitas enviar un número ' );
            return;
        }else{
    
            for( let i = 1 ; i <= limite; i ++ ){
            
               data +=  `${ base } * ${ i } = ${ base * i } \n`;
        
                    fs.writeFile(`tablas/tabla-${ base }.txt`, data , (err) => {
                      if (err) return new Error( err );
                    });
                    
                }
                
                resolve(`tabla${ base }`);
                return;
    
    
        }
        
    });
    
    
     
}
 
module.exports = {
    crearArchivo,
    listarArchivo
}