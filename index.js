import createMemory from './memory.js';
import CPU from './cpu.js';

let cpu = new CPU;

cpu.ip.setUint32(0, 10020)

console.log(cpu.getRegister('ip'))
