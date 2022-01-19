const getInvestigaAnimales = (() => {
    //data-toggle="modal" data-target="#exampleModal"  onclick="modalDetails('${i}')"
    //window.modalDetails    ,  https://developer.mozilla.org/es/docs/Web/API/Window
    // const son_animal = document.getElementById('modal-body')
    // const son_animal = document.getElementById('modalEmergente') (function(datosInv)

    const getInvestigar = (datosInv) => {
        const html = `<div class="card px-3 pb-2" style="width: 18rem;">
                <img src="assets/imgs/${datosInv.imagen}" class="card-img-top" alt="...">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${datosInv.edad}</li>
                        <li class="list-group-item">Comentarios</li>
                        <li class="list-group-item">${datosInv.comentarios}</li>
                    </ul>
                </div>`
        return html;
    };
    
    return {getInvestigar};
})()

export default getInvestigaAnimales;
