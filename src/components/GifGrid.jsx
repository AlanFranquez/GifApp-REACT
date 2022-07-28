import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Gifitem } from "./Gifitem";
import PropTypes from 'prop-types'


export const GifGrid = ({category}) => {


    // Custom HOOK
    const {images, isLoading} = useFetchGifs(category)

      

    // const [images, setImages] = useState([]);


    // const newImages = async() => {
    //     const insertar = await getGifs(category);
    //     setImages(insertar)
    // }
    
    // useEffect( () => {
    //     newImages();
    // }, []) 
    
    // console.log(images)


    return (
        <>
            <h2>{category}</h2>

            {isLoading ? <p>Cargando...</p> : null}
            {/* Otra forma de hacerlo pero más  corto */}
            {/* {isLoading && <p>Cargando...</p>} */}

            <div className="card-grid">

            {/* Destructuración del img */}
                {images.map((img) => {
                    return <Gifitem key={img.id} {...img} />
                })}

            </div>


        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}