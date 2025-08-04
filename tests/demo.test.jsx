
// test('Esta prueba no debe de fallar',()=>{
//     // INICIALIZACION
//     const message1 = 'Hola mundo';

//     // ESTIUMUL
//     const message2 = message1.trim();

//     //OBSERVAR EL COMPORTAMIENTO... ESPERADO
//     expect(message1).toBe(message2);
// });

describe('Pruebas en demo components',()=>{
    test('Prueba test',()=>{
        const message = 'Hola mundo';
        const message2 = message.trim();
        expect(message).toBe(message2);
    })
})