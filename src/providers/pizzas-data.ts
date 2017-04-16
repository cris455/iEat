import { Injectable } from '@angular/core';

@Injectable()
export class PizzaData{

    data: Pizza[];

    constructor(){
        this.loadData();
    }

    loadData(){
        this.data=[
            {nombre:"Hawaina",precio:4000,img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqw0QGnmv7TzaGXSNiQeE0LFzzlgtxG_aIIMBZC06YCGDZ7xka"},
            {nombre:"Jamon y Queso",precio:4000,img:"http://decasa.es/sites/default/files/pizza-jamon-york.jpg"},
            {nombre:"Vegetariana",precio:4000,img:"https://www.papajohnscdmx.com/wp-content/uploads/2014/10/Vegetariana.jpg"},
            {nombre:"Especial",precio:4000,img:"http://st.depositphotos.com/1557478/4520/i/950/depositphotos_45201411-stock-photo-meat-chicken-and-mushrooms-pizza.jpg"},
        ];
    }
}

export class Pizza{
    nombre: string;
    precio: number;
    img: string;
}
