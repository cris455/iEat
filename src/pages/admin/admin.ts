import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from 'ionic-angular';
import { Producto } from "../models/producto";
import { Pedido } from '../models/pedido'

@Component({
    selector: 'page-admin',
    templateUrl: 'admin.html'
})
export class AdminPage {

    data = { usuario: "", password: "" };
    productos: Producto[];
    pedido: Pedido;
    total: number = 0;
    constructor(public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController) {

    }

    ionViewDidEnter() {
        this.storage.get("ventas").then(val => {
                this.total = val;
        });
    }

    actualizarPedido(valor: number) {
        this.pedido = { estado: valor, productos: this.productos };
    }
}