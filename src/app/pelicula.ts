export class Pelicula {
    public id:number;
    public titulo:string;
    public director:string;
    public anio:number;

    constructor(id, titulo, director, anio){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
    }
}