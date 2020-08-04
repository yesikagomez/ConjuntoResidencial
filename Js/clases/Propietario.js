import Inmueble from './Inmueble.js';

export default class Propietario extends Inmueble{
    constructor(nombre, documento, genero,  fecha_nacimiento){
        super( nombre);
        this.grado = grado;
        this.grupo = grupo;
    }
    
    estudiar(){
        console.log("Estoy estudiante...");
    }
} 

