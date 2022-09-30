import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html',
    template:``
})
export class HeroeComponent{
    nombre:String ='Iroman';
    edad:number =45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre():String{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';

    }
    cambiarEdad(){
        this.edad=30;

    }

}