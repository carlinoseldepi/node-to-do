const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea'
        }
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca la tarea como completada'
        }
    })
    .command('listar', 'Muestra la lista de tareas', {

    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Descripción de la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv: argv
}