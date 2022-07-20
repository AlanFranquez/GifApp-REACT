import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Ghibli')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(e.target.value)

    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (

        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Busca un gif' value={inputValue} onChange={onInputChange}/>
        </form>
        
    )
}
