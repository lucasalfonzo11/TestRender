import { getUser, getUsuarioActivo } from "../../src/basepruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getuser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe de retornar un objeto',()=>{
        const name = 'Lucas';
        const testUser = {
            uid: 'ABC567',
            username: name
        };
        const user = getUsuarioActivo(name);

        expect(testUser).toEqual(user);
    })
})