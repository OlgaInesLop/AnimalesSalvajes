// https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Rugido.mp3

import { Leon, Lobo, Oso, Serpiente, Aguila } from './animales.js'
import getDatosAnimales from './consultar.js'
import getInvestigaAnimales from './investigar.js'
import getSonidoAnimal from './sonido.js'

const animalesSalvajes = (function(){
    let state = {}
    let arr_animales = []
       
    //DOMCache
    const form = document.querySelector("form");
    const ini_animal = document.getElementById('Animales')
    const img_animal = document.getElementById('preview')
    const btn_animal = document.getElementById('btnRegistrar')
    const info_animal = document.getElementById('prubamod')
    // const mod_animal = document.getElementsByClassName('modalbody')[0]
    // const mod_animal = document.getElementsById('datosalva')

    //Eventhandler
    btn_animal.addEventListener('click', clickAgregar)
    //    ('click',investigarAnimales)

    async function Iniciar() {
        state = await getDatosAnimales.getDatos()
        console.log(state.animales)
        console.log(state.animales[4].name)

    }

    function agregarAnimal(datos) {
        const bca_animal = state.animales.find(busca_ani => busca_ani.name === datos.tipo_animal)
        const dat_sonido = bca_animal.sonido
        const dat_imagen = bca_animal.imagen

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
                console.error('Error tipo animal invalido!!!')
                break;
        }
        arr_animales.push(nuevoAnimal);
        muestraAniSalvaje(dat_imagen);
    }

    async function clickAgregar(e) {
        e.preventDefault();
        const datos = {
          tipo_animal: form.tipo_animal.value,
          edad: form.edad.value,
          comentario: form.comentarios.value
        };
        console.log(datos.tipo_animal)
        agregarAnimal(datos);
        
        console.log(arr_animales.length)
        console.log(arr_animales[arr_animales.length-1])
        // agregar imagenes
        // render(arr_animales[arr_animales.length-1])
        render()
        info_animal.innerHTML = getInvestigaAnimales.getInvestigar(arr_animales[arr_animales.length-1])
        // mod_animal.innerHTML = getInvestigaAnimales.getInvestigar(arr_animales[arr_animales.length-1])

        console.log(getSonidoAnimal.getSonido(arr_animales[arr_animales.length-1]))
        
    }

    function muestraAniSalvaje(imagenAnimal) {
        const html = `<img src="assets/imgs/${imagenAnimal}" alt="Animal" style="height: 200px; width: 200px;" class="card-img-top">`
        img_animal.innerHTML = html;
    }

    function render() {
        let html = ''
        arr_animales.forEach(aSalvaje => {
        html += `<div class="px-3 pb-2 participante">
            <div class="card" style="width: 18rem;">
                <div class="bg-dark text-white">
                    <img height="200" src="assets/imgs/${aSalvaje.imagen}" data-toggle="modal" data-target="#exampleModal" onclick="modalDetails('${aSalvaje}')" />
                <div>
                <button onclick="playSound('')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
            </div>
        </div>`
        });
        ini_animal.innerHTML = html;
    }

    return {Iniciar: Iniciar}
})()

animalesSalvajes.Iniciar()