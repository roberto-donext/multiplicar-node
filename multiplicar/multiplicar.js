const fs = require('fs')
const colors = require('colors');

let listarArchivo = (base, limite = 10) => {


    console.log('=================================='.green);
    console.log('========Tabla multiplicar========='.red);
    console.log('=================================='.green);
    for (let i = 1; i <= limite; i++) {
        let data = `${base} * ${i} = ${base * i}\n`
        console.log(data)
    }

}

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero')
            return;
        }

        let data = '';

        for (let i = 1; i < 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }
        })

    })

}

module.exports = {
    crearArchivo,
    listarArchivo
}