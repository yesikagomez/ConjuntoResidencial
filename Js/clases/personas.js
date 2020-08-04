export default class Persona{
    constructor(edad, nom, apellido1, genero){
       this.edad = edad;
       this.nombre = nom;
       this.apellido = apellido1;
       this.genero = genero;
    }
    
    hablar(){
       console.log("Estoy hablando ....");
    }
    
    correr(distancia){
        return `Estoy corriendo una distancia de ${distancia}`;
    }
        
    getEdad(){
        return this.edad;
    }
    
    setEdad(edad){
        this.edad = edad;
    }
}