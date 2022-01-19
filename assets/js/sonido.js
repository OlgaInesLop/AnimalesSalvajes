const getSonidoAnimal = (() => {

    const getSonido =  (AnimalSalvaje) => {
        const tipo_animal = AnimalSalvaje.nombre
        console.log(tipo_animal)
        let dat_sonido = ''
        switch (tipo_animal) {
            case 'Leon':
                dat_sonido = AnimalSalvaje.rugir()
                break;
            case 'Lobo':
                dat_sonido = AnimalSalvaje.aullar()
                break;
            case 'Oso':
                dat_sonido = AnimalSalvaje.grunir()
                break;
            case 'Serpiente':
                dat_sonido = AnimalSalvaje.sisear()
                break;
            case 'Aguila':
                dat_sonido = AnimalSalvaje.chillar()
                break;
            default:
                break;
        }
        return `Por implementar Sonido de : ${AnimalSalvaje.nombre} en ${dat_sonido}`
    };
    
    return {getSonido};
})()

export default getSonidoAnimal;
