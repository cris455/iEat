import { Injectable } from '@angular/core';

@Injectable()
export class ComidaData{

    data: Comida[];

    constructor(){
        this.loadData();
    }

    loadData(){
        this.data=[
            {nombre:"Consome y Pollo",precio:6000,img:"https://t2.rg.ltmcdn.com/es/images/7/3/3/img_consome_de_pollo_26337_paso_4_600.jpg"},
            {nombre:"Costilla Ahumada",precio:12000,img:"https://img.grouponcdn.com/needish/3vzML9fTMWcdsSNkQDm3/ZL-700x420/v1/c700x420.jpg"},
            {nombre:"Chuleta de Cerdo",precio:12000,img:"https://previews.123rf.com/images/looby/looby1203/looby120300067/12614754-jugosa-chuleta-de-cerdo-a-la-plancha-con-verduras-corte-el-cuello-Foto-de-archivo.jpg"},
            {nombre:"Pollo Broaster",precio:20000,img:"https://i.ytimg.com/vi/dfbkTk7LrFk/hqdefault.jpg"},
        ];
    }
}

export class Comida{
    nombre: string;
    precio: number;
    img: string;
}
