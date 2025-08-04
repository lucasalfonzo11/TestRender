import { retornaArreglo } from "../../src/basepruebas/07-deses-arr";

describe('pruebas en 07-deses-arr', () => { 
    test('debe de retornar un string y un número', () => {
        const [letters , numbers] = retornaArreglo();
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toStrictEqual(expect.any(String));
        
    });
})