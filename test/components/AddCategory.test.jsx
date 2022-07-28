import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Probando el componoente de AddCategory', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {    


        render(<AddCategory onNewCategory={() => {}} />)
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Ghibli'}})

        expect(input.value).toBe('Ghibli')

        // screen.debug();

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Ghibli';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        
        const form = screen.getByRole('form');

        // Establecer valor
        fireEvent.input(input, {target: {value: inputValue}});

        // Simular el submit
        fireEvent.submit(form);

        // screen.debug()

        // Evaluar si el valor se vuelve vacio cuando se ejecuta el submit
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        

    });

    test('No debe de llamar el onNewCategory si el input está vacio', () => {

        const onNewCategory = jest.fn();


        render(<AddCategory onNewCategory={onNewCategory}/>)


        const form = screen.getByRole('form');

        fireEvent.submit(form);

        screen.debug()

        expect(onNewCategory).not.toHaveBeenCalled();
        

    })

})