import { Component } from '@angular/core';
import {Pelicula} from './pelicula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Peliculas Angular 2';

  public pelicula:Pelicula;
  public mostrarDatos:boolean;

  constructor(){
    this.mostrarDatos = false;
    this.pelicula = new Pelicula(1, "Batman v Superman", "Zack Snider", 2016);
    this.debug();
  }

  debug(){
    console.log(this.pelicula);
  }

  onShowHide(value){
    this.mostrarDatos = value;
  }
}
