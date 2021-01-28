const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');

console.log(color.red(argv));

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log("--- Tarea".blue);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
        }
        break;

    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        console.log(porHacer.borrar(argv.descripcion));
        break;

    default:
        console.log('Comando no conocido');
}