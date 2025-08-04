import { getSaludo } from "../../src/basepruebas/02-template-string";


describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe de retornar "Hola Lucas"', () => {
        const name = 'Lucas';
        const message = getSaludo(name);
        expect( message ).toBe(`Hola ${name}!!!`)
    })
})