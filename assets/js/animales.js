class Animal{
    #nombre
    #edad
    #imagen
    #comentarios
    #sonido
    constructor(nombre, edad,imagen,comentarios,sonido){
        this.#nombre = nombre
        this.#edad = edad
        this.#imagen = imagen
        this.#comentarios = comentarios
        this.#sonido= sonido
    }

    get nombre() {
        return this.#nombre
    }

    get edad() {
        return this.#edad
    }

    get imagen() {
        return this.#imagen
    }

    get comentarios() {
        return this.#comentarios
    }

    get sonido() {
        const url = 'https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/'
        return url+`${this.#sonido}`
    }
}

class Leon extends Animal{
    rugir() {
        return `Por implementar RUGIR ${this.nombre}`
    }
}

class Lobo extends Animal{
    aullar(){
        return `Por implementar AULLAR ${this.nombre}`
    }
}

class Oso extends Animal{
    grunir(){
        return `Por implementar GRUÑIR ${this.nombre}`
    }
}

class Serpiente extends Animal{
    sisear(){
        return `Por implementar SISEAR ${this.nombre}`
    }
}

class Aguila extends Animal{
    chillar(){
        return `Por implementar CHILLAR ${this.nombre}`
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }