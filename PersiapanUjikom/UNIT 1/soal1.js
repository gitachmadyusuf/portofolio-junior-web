class Sepeda {
    constructor (jariJari) {
        this.jariJari = jariJari;
    }

    diameter() {
        return 2 * this.jariJari;
    }
}

const sepedaSaya = new Sepeda(14);
console.log("Diameter roda:", sepedaSaya.diameter(), "cm");