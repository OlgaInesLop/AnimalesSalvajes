// Estructura de datos
// https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Rugido.mp3

// const tipo_animal = document.getElementById('animal')
// console.log(tipo_animal)

import Animal from './animal.js'

class Leon extends Animal{
    rugir() {}
}
class Lobo extends Animal{
    aullar(){}
}
class Oso extends Animal{
    grunir(){}
}
class Serpiente extends Animal{
    sisear(){}
}
class Aguila extends Animal{
    chillar(){}
}


const animalesSalvajes = (function(){
    let state; // = {}
    let arr_animales = []
    let arr_json = []
    
    //DOMCache
    const form = document.querySelector("form");
    const ini_animal = document.getElementById('Animales')
    const img_animal = document.getElementById('preview')
    const son_animal = document.getElementById('player')
    const btn_animal = document.getElementById('btnRegistrar')

    //Eventhandler
    btn_animal.addEventListener('click', clickAgregar)

    async function Iniciar() {
        // obtener los datos del json
        // guardar en el estado los datos obtenenidos del json
        state = await getDatosAnimales()
        console.log(state.animales)
        console.log(state.animales[4].name)
        // console.log(state.animales[4].imagen)
        // console.log(state.animales[4].sonido)
        // console.log(state.animales[2].name)
        // console.log(state.animales.length)

    }

    async function getDatosAnimales() {
        const url = "http://localhost:5500/animales.json"
        const respuesta = await fetch(url)
        return await respuesta.json()
    }

    async function clickAgregar(e) {
        e.preventDefault();
        const datos = {
          tipo_animal: form.tipo_animal.value,
          edad: form.edad.value,
          comentario: form.comentarios.value
        };
        console.log(datos.tipo_animal)
        state = await getDatosAnimales()
        console.log(state.animales[4].sonido)

        let dat_imagen;
        let dat_sonido;
        state.animales.forEach(busca_ani => {
            if (busca_ani.name === datos.tipo_animal ) {
                console.log(`Encontro: ${busca_ani.imagen} el sonido: ${busca_ani.sonido}`)
                dat_imagen = busca_ani.imagen
                dat_sonido = busca_ani.sonido
            }
        });

        let nuevoAnimal;
        switch (datos.tipo_animal) {
            case 'Leon':
                nuevoAnimal = new Leon(datos.tipo_animal, datos.edad,dat_imagen,datos.comentario,dat_sonido)
                break;
            case 'Lobo':
                nuevoAnimal = new Lobo(datos.tipo_animal, datos.edad,dat_imagen,datos.comentario,dat_sonido)
                break;
            case 'Oso':
                nuevoAnimal = new Oso(datos.tipo_animal, datos.edad,dat_imagen,datos.comentario,dat_sonido)
                break;
            case 'Serpiente':
                nuevoAnimal = new Serpiente(datos.tipo_animal, datos.edad,dat_imagen,datos.comentario,dat_sonido)
                break;
            case 'Aguila':
                nuevoAnimal = new Aguila(datos.tipo_animal, datos.edad,dat_imagen,datos.comentario,dat_sonido)
                break;                                            
            default:
                console.log('Error tipo animal invalido!!!')
                break;
        }

        arr_animales.push(nuevoAnimal)
        console.log(nuevoAnimal)
        // agregar imagenes
        const html = `<img src="assets/imgs/${dat_imagen}" alt="Aguila" style="height: 200px;">`
        img_animal.innerHTML = html;
        // const html1 = `<img src="assets/imgs/${dat_imagen}" alt="Aguila" style="height: 400px;">`
        // ini_animal.innerHTML = html1;
        // son_animal.innerHTML = `<img src="assets/imgs/audio.svg" alt="Sonido" style="height: 50px;">`   
    
    }

    return {Iniciar: Iniciar}
})()

animalesSalvajes.Iniciar()