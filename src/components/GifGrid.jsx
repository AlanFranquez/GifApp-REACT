import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { Gifitem } from "./Gifitem";


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);


    const newImages = async() => {
        const insertar = await getGifs(category);
        setImages(insertar)
    }
    
    useEffect( () => {
        newImages();
    }, []) 
    
    console.log(images)


    return (
        <>
            <h2>{category}</h2>
            

            <div className="card-grid">

            {/* Destructuración del img */}
                {images.map((img) => {
                    return <Gifitem key={img.id} {...img} />
                })}

            </div>


        </>
    )
}
