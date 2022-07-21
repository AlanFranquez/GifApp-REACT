import { useState } from "react"
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Ghibli'])
    console.log(categories);


    const onAddCategory = (e) => {

        if(categories.includes(e)) {
            return;
        }

        // setCategories(arr => [ 'Alice in Borderland', ...arr]);

        // OTRA FORMA DE HACERLO
        // e = valor del input
        setCategories([e, ...categories])

        // console.log(e)
    };

    

  return (
    <>
        {/* TITULO */}
        <h1>Hola Mundo</h1>

        {/* INPUT */}
        <AddCategory 
        onNewCategory={onAddCategory}/>

        {/* Resultados, listado de gifs */}
        
            {/* no se recomienda usar el indice (segundo argumento) para los keys */}
        {categories.map((category) =>
            <GifGrid category={category} key={category}/>
        )}
        
        {/* Gif item */}

    </> 
  )
}
