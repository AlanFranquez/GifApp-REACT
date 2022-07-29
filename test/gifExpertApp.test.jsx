import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('pruebas con gifExpertApp', () => {

    const e = 'Ghibli'

    test('Se agrega el valor al input', () => { 

        render(<GifExpertApp />);
        

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');


        fireEvent.input(input, {target: {value: e}});
        fireEvent.submit(form); // Agrega la categoria de ghibli

        screen.debug()
        expect(screen.getAllByRole('heading', {level: 2}).length).toBe(1)

    });

    test('No se debería agregar una nueva categoría si se repite el valor', () => {

        render(<GifExpertApp />) 

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: e}});
        fireEvent.submit(form)

        fireEvent.input(input, {target: {value: e}});
        fireEvent.submit(form)

        fireEvent.input(input, {target: {value: 'Uruguay'}});
        fireEvent.submit(form)


        expect(screen.getAllByRole('heading', {level: 2}).length).toBe(2)


    });

})