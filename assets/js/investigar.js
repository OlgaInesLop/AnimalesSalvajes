const modalDetails = (function(datos) {
    //data-toggle="modal" data-target="#exampleModal"  onclick="modalDetails('${i}')"
    //window.modalDetails    ,  https://developer.mozilla.org/es/docs/Web/API/Window


    // const son_animal = document.getElementById('modal-body')
    // const son_animal = document.getElementById('modalEmergente')

    console.log('investigarAnimales')
    console.log(datos)



    const html = `<div class="card" style="width: 18rem;">
        <img src="assets/imgs/Aguila.png" class="card-img-top" alt="...">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Edad</li>
            <li class="list-group-item">Comentarios</li>
            <li class="list-group-item">comentario brbrbrbrbr</li>
        </ul>
    </div>`
    son_animal.innerHTML = html
})()