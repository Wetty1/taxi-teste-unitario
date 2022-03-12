const Trip = require('./index')
const { describe, expect, it } = require('@jest/globals')

describe('Calcula viagem', () => {
    it('deve calcular com a tarifa normal', () => {
        const valueTrip = new Trip(new Date('2022-03-15T12:00'), 1000).calculate()
        expect(valueTrip).toBe(2100)
    })

    it('deve calcular com a tarifa noturna', () => {
        const valueTripDomingo = new Trip(new Date('2022-03-13T23:00'), 1000).calculate()
        expect(valueTripDomingo).toBe(3900)
        const valueTripSegunda = new Trip(new Date('2022-03-14T23:00'), 1000).calculate()
        expect(valueTripSegunda).toBe(3900)
        const valueTripSexta = new Trip(new Date('2022-03-18T23:00'), 1000).calculate()
        expect(valueTripSexta).toBe(3900)
        const valueTripSabado = new Trip(new Date('2022-03-19T23:00'), 1000).calculate()
        expect(valueTripSabado).toBe(3900)
        const valueTripTerca = new Trip(new Date('2022-03-08T23:00'), 1000).calculate()
        expect(valueTripTerca).toBe(3900)
    })

    it('deve calcular com a tarifa de sabado', () => {
        const valueTrip = new Trip(new Date('2022-03-12T13:00'), 1000).calculate()
        expect(valueTrip).toBe(3000)
    })

    it('deve retornar um erro quando a data for inválida', () => {
        expect(() => new Trip('2022-03-17T10:00', 1000)).toThrow(Error)
    })
})