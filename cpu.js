
class CPU {
    constructor(memorymeth, memlen) {
        this.memory = memorymeth(memlen);

        this.reg16names = [
            'acc',
            'r1','r2','r3','r4',
            'r5','r6','r7','r8',
            'r9','r10','r11','r12',
            'r13','r14','r15','r16'
        ]
        this.reg8names = [
            'acc',
            '8r1','8r2','8r3','8r4',
            '8r5','8r6','8r7','8r9'
        ]
    }
}

export default CPU;