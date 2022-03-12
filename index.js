class Trip {
    HORAS_COMECO_NOITE = 22
    HORAS_FINAL_NOITE = 6

    // tarifas em reais
    TARIFA_NOITE = 3.9
    TARIFA_SABADO = 3
    TARIFA_NORMAL = 2.1


    constructor(dataViagem, distancia) {
        if (!(dataViagem instanceof Date)) {
            throw new Error('Data errada')
        }

        this.dataViagem = dataViagem
        this.distancia = distancia
    }

    éNoturno() {
        return this.dataViagem.getHours() > this.HORAS_COMECO_NOITE || this.dataViagem.getHours() < this.HORAS_FINAL_NOITE
    }

    éSabado() {
        return this.dataViagem.getDay() === 6
    }

    // éSexta() {
    //     return this.dataViagem.getDay() === 5
    // }

    calculate() {
        if (this.éNoturno()) return this.distancia * this.TARIFA_NOITE;
        if (this.éSabado()) return this.distancia * this.TARIFA_SABADO;
        return this.distancia * this.TARIFA_NORMAL;
    }
}

module.exports = Trip

const dataViagem = new Date('2022-03-12T09:00')
const distancia = 5
console.log(new Trip(dataViagem, distancia).calculate(), ' reais')