import { Injectable } from '@angular/core';
import { Usuario } from "../pages/models/usuario";

@Injectable()
export class UsuarioData{

    data: Usuario[];

    constructor(){
        this.loadData();
    }

    loadData(){
        this.data=[
            {usuario:"cris455",password:"123"},
            {usuario:"admin",password:"123"},
           ];
    }
}

