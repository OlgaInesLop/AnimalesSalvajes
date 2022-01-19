const getDatosAnimales = (() => {
    const url = "/animales.json"

    const getDatos = async () => {
        const respuesta = await fetch(url)
        return respuesta.json()
    };
    
    return {getDatos};
})()

export default getDatosAnimales;
