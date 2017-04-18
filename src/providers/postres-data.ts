import { Injectable } from '@angular/core';

@Injectable()
export class PostreData{

    data: Postre[];

    constructor(){
        this.loadData();
    }

    loadData(){
        this.data=[
            {nombre:"Tres Leches",precio:7000,img:"http://www.buenapetitopr.com/images/recetas/postres/tres_leches_300x200.png"},
            {nombre:"Helado",precio:3000,img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTRlN2euuegzvPVcj1OhIC3lqWDSqR9_PJiNZ1caA6pann9NzeY"},
            {nombre:"Fresas con Crema",precio:5000,img:"http://fotos2013.cloud.noticias24.com/fresascremasqueso630.jpg"},
            {nombre:"Flan",precio:4500,img:"http://flandequeso.es/img/flan-de-queso-tradicional-450.jpg"},
        ];
    }
}

export class Postre{
    nombre: string;
    precio: number;
    img: string;
}