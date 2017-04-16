import { Injectable } from '@angular/core';

@Injectable()
export class BebidaData{

    data: Bebida[];

    constructor(){
        this.loadData();
    }

    loadData(){
        this.data=[
            {nombre:"Pepsi",precio:2000,img:"http://www.cadenacic.com.ar/5-large_default/pepsi.jpg"},
            {nombre:"Manzana",precio:2000,img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTpIgVoEO9Qv09pEE7kS9W11f57hyApj-mV0UrC-zkBJ1tXCNcD"},
            {nombre:"Coca-cola",precio:2000,img:"https://images-na.ssl-images-amazon.com/images/I/5156FefjlqL._SY355_.jpg"},
            {nombre:"Hit Mora",precio:1800,img:"http://www.exito.com/images/products/065/0000094784088065/0000094785706101_lrg_a.jpg"},
            {nombre:"Hit Mango",precio:1800,img:"https://www.larebajavirtual.com/images/productos/sii/F/300x300/jugo_hit_mango-85440.png"},
        ];
    }
}

export class Bebida{
    nombre: string;
    precio: number;
    img: string;
}
