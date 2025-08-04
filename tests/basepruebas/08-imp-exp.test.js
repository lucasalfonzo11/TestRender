import { getHeroeById, getHeroesByOwner } from "../../src/basepruebas/08-imp-exp";
import heroess from "../../src/data/heroes";

describe('prueba funcion 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({id:1,name:'Batman',owner: 'DC'});
    });

    test('getHeroeById debe de retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe de retornar un arreglo con longitud 3',()=>{
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            {id:1,name:'Batman',owner: 'DC'},
            {id:3,name:'Superman',owner: 'DC'},
            {id:4,name:'Flash',owner: 'DC'}
        ]);
        expect(heroes).toEqual(heroess.filter( (heroe) => heroe.owner === owner ));
    });

    test('getHeroesByOwner debe de retornar un arreglo con longitud 3',()=>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroess.filter( (heroe) => heroe.owner.toUpperCase() === owner.toUpperCase() ));
    })
})