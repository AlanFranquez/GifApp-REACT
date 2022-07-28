import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs"

describe('pruebas en getGifs', () => {

    test('Debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('Ghibli')
        // console.log(gifs)

        // Medir que el largo de los resultados sea mayor a 0
        expect(gifs.length).toBeGreaterThan(0);

        // probamos que el primer resultado de un objeto con id, title y url, cada llave debe ser un string
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });

});