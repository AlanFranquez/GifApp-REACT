import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
        // console.log(e.target.value)

    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === '') {
            console.log('rellene los datos');

            return;
        }

        // Llamo al arreglo, de esta forma ya que no tengo la primera opción de categoria
        // setCategories(categories => [inputValue, ...categories]);

        // Se pone el valor en el argumento y el mismo es el valor del input
        onNewCategory(inputValue.trim())

        //  Para limpiar el el input
        setInputValue('')
    }

    return (

        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Busca un gif' value={inputValue} onChange={onInputChange}/>
        </form>
        
    )
}
