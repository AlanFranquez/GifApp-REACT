export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=tuRyILluzwhRT1pc5yIp976T6g3qqHCE&q=${category}&limit=20`

    const resp = await fetch(url);
    const datos = await resp.json();
    const {data} = datos;


    // Extraemos la data, se hace de esta forma porque todo esta en un arreglo


    const gifs = data.map((img) => {
        return {
            id: img.id,
            url: img.images.downsized_medium.url,
            title: img.title,
            
        }
    })
    
    console.log(gifs)
    return gifs;
};