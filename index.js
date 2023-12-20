import createMemory from './memory.js';
import CPU from './cpu.js';

let cpu = new CPU(1024*1024);

//tests
cpu.memory.setUint8(24)

console.log(cpu.fetch())
