import createMemory from './memory.js';

class CPU {
    constructor(memlen) {
        this.memory = createMemory(memlen);

        this.registerNames = [
            'acc',
            'r1','r2','r3','r4',
            'r5','r6','r7','r8',
            'r9','r10','r11','r12',
            'r13','r14','r15','r16'
        ];

        this.ip = createMemory(4);
        this.registers = createMemory(this.registerNames.length * 2);

        this.registerMap = this.registerNames.reduce((map, rname, i) => {
            map[rname] = i * 2;
            return map;
        }, {});
    };

    getRegister(rname) {
        if (!(rname in this.registerMap || rname === 'ip')) {
            throw new Error(`getRegister: No such register '${rname}'`);
        };
        if (rname in this.registerMap) {
            return this.registers.getUint16(this.registerMap[rname]);
        } else {
            return this.ip.getUint32(0);
        };
    };

    setRegister(rname, value) {
        if (!(rname in this.registerMap || rname === 'ip')) {
            throw new Error(`setRegister: No such register '${rname}'`);
        };
        if (rname in this.registerMap) {
            return this.registers.setUint16(this.registerMap[rname], value);
        } else {
            this.ip.setUint32(0, value);
        };
    };

    fetch() {
        const nextInstructionAddress = this.getRegister('ip');
        const instruction = this.memory.getUint8(nextInstructionAddress);
        this.setRegister('ip', instruction);
        return instruction;
    }
};

export default CPU;