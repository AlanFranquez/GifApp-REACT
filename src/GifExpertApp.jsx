import { useState } from "react"
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Ghibli', 'Dragon ball', 'Kimetsus'])
    console.log(categories);


    const onAddCategory = () => {
        setCategories(arr => [ 'Alice in Borderland', ...arr]);

        // OTRA FORMA DE HACERLO
        // setCategories([...categories, 'Alice in Borderland'])
    };

    

  return (
    <>
        {/* TITULO */}
        <h1>Hola Mundo</h1>

        {/* INPUT */}
        <AddCategory />

        {/* Resultados, listado de gifs */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {categories.map((category) => {
                return <li key={category}>{category}</li>
            })}
        </ol>
            {/* Gif item */}

    </> 
  )
}
