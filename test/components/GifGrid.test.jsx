import {render, screen} from '@testing-library/react'
import {GifGrid} from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

// Implementación ficticia
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Ghbili'

    test('Debe de mostrar el loading inicialmente', () => {


        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>)
        screen.debug();

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Ghibli',
                url: 'https://hi.com'
            },
            {
                id: 'ABCDE',
                title: 'Ghibli2',
                url: 'https://hi2s.com'
            },
        ]


        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

    });



})