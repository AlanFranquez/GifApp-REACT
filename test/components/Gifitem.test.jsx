import { render, screen } from "@testing-library/react"
import { Gifitem } from "../../src/components/Gifitem"

describe('Testeando el gifitem', () => {

    const title = 'ARISU';
    const url = 'https://google.com/'

    test('Proabndo el proptype', () => {

        const {container} = render(<Gifitem title={title} url={url} />);

        expect(container).toMatchSnapshot()

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<Gifitem title={title} url={url} />);

        // screen.debug();

        // expect(screen.getByRole("img").src).toBe(url);
        // expect(screen.getByRole("img").alt).toBe(title);

        const {src, alt } = screen.getByRole('img');

        expect(src).toBe(url)
        expect(alt).toBe(alt)

    });

    test('Debe de mostrar el titulo en el componoente', () => {

        render(<Gifitem title={title} url={url} />);


        // Los atributos no los toma como textos, por lo tanto solo aparece uno acá 
        expect(screen.getByText(title)).toBeTruthy()

    });

})