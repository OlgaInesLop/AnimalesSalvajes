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
    const sonido_animal = document.getElementById('player')
    const mod_animal = document.getElementsByClassName('an_salvajes')[0]

    //Eventhandler
    btn_animal.addEventListener('click', clickAgregar)
    $('#exampleModal').on('show.bs.modal', showModalHandler)
    //    ('click',investigarAnimales)

    async function Iniciar() {
        state = await getDatosAnimales.getDatos()
        console.log(state.animales)
    }

    function agregarAnimal(datos) {
        const bca_animal = state.animales.find(busca_ani => busca_ani.name === datos.tipo_animal)
        const dat_sonido = bca_animal.sonido
        const dat_imagen = bca_animal.imagen
        muestraAniSalvaje(dat_imagen);

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
    }

    async function clickAgregar(e) {
        e.preventDefault();
        const datos = {
          tipo_animal: form.tipo_animal.value,
          edad: form.edad.value,
          comentario: form.comentarios.value
        };
        console.log(datos)
        agregarAnimal(datos);
        console.log(arr_animales)
        animal.selectedIndex = 0;
        edad.selectedIndex = 0;
        render()
        alert(getSonidoAnimal.getSonido(arr_animales[arr_animales.length-1]))
        // console.log(getSonidoAnimal.getSonido(arr_animales[arr_animales.length-1]))
    }

    function muestraAniSalvaje(imagenAnimal) {
        const html = `<img src="assets/imgs/${imagenAnimal}" alt="Animal" style="height: 200px; width: 200px;" class="card-img-top">`
        img_animal.innerHTML = html;
    }

    function showModalHandler(e) {
        const index = e.relatedTarget.dataset.index
        mod_animal.innerHTML = getInvestigaAnimales.getInvestigar(arr_animales[index])
    }

    function render() {
        if (arr_animales.length < 1) { return }

        const html = arr_animales.map((aSalvaje, index) => (`<div class="card" style="width: 18rem;">
        <img src="/assets/imgs/${aSalvaje.imagen}" class="card-img-top" alt="AnimalSalvaje" data-toggle="modal" data-target="#exampleModal" data-index="${index}">
        <div class="card-body" style="background-color: grey;">
            <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">
                <img src="assets/imgs/audio.svg" alt="Sonido" style="width: 20px;">
            </a>
        </div>
      </div>`));
        ini_animal.innerHTML = html.join('');
    }

    return {Iniciar: Iniciar}
})()

animalesSalvajes.Iniciar()



