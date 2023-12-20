import createMemory from './memory.js';
import CPU from './cpu.js';

let cpu = new CPU;

//tests
cpu.setRegister('ip', 100020);
cpu.setRegister('acc', 1024);

console.log(cpu.getRegister('ip'));
console.log(cpu.getRegister('acc'));

cpu.getRegister('uhmmmmmmmmmmmmmmm')
