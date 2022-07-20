import { useState } from "react"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(e.target.value)

    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue === '') {
            console.log('rellene los datos');

            return;
        }

        // Llamo al arreglo, de esta forma ya que no tengo la primera opción de categoria
        setCategories(categories => [inputValue, ...categories]);

        //  Para limpiar el el input
        setInputValue('')
    }

    return (

        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Busca un gif' value={inputValue} onChange={onInputChange}/>
        </form>
        
    )
}
