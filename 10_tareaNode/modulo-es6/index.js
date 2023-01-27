import * as moduloMatematicas from './modulos/controller.js'
import chalk from 'chalk';

const log = console.log;

const sum = moduloMatematicas.suma(4,5)
log(chalk.green(sum))
const mult = moduloMatematicas.multiplicacion(1,2)
log(chalk.green(mult))


