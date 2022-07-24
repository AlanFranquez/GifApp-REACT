

// Hook no es más que una función que regresa algo

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


        const newImages = async() => {
            const insertar = await getGifs(category);
            setImages(insertar);
            setIsLoading(false);
        }
        
        useEffect( () => {
            newImages();
        }, []) 
        
        console.log(images)

    


    return {
        images: images,
        isLoading: isLoading
    }



}
