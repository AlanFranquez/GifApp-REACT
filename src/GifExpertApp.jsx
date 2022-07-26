import { useState } from "react"
// Cuando en una carpeta existe un archivo index, entonces apunta autoaticamente a ese archivo, no es necesario especificarlo
import { AddCategory, GifGrid } from './components';

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
        <h1>Giphy app</h1>

        <div className="container">
            <div className="textos">

                <h4>Encuentra tu gif</h4>
                <p>Busca el gif que más te guste y sea de tu agrado. Aplicación hecha con REACT HOOKS y testeada con JEST.</p>


                

                    <a href="#prueba"><button>EMPEZA AHORA</button></a>
                
            </div>

            

        </div>

        {/* INPUT */}
        <div id="prueba"></div>
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
