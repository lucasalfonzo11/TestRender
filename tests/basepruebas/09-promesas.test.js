import { getHeroeByIdAsync } from "../../src/basepruebas/09-promesas";

describe('prueba 09-promesas', () => { 
    test('deberia de retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(hero =>{
            expect(hero).toEqual({
                id:1,
                name:'Batman',
                owner:'DC'
            });
            done();
        });
    })
});

describe('prueba 09-promesas', () => { 
    test('debe de tener un error si el error no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id).catch(err =>{
            expect(err).toBe(`No se pudo enontrar el heroe [100]`);
            done();
        });
    })
})