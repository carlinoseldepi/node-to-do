const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardar();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}


const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
        listadoPorHacer = [];
    }

}

const guardar = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    })
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardar();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {
    cargarDB();

    console.log('descripcionnnnn', descripcion);

    let nuevoListado = listadoPorHacer.filter(tarea => {
        console.log('tarea.descripcion', tarea.descripcion);
        console.log('descripcion', descripcion);
        return tarea.descripcion !== descripcion;
    });


    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardar();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}