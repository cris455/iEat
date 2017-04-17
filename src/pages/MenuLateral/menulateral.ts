import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login"
import { PedidosPage } from "../pedidos/pedidos";
import { CarritoPage } from "../carrito/carrito";

@Component({
    selector: 'page-menulateral',
    templateUrl: 'menulateral.html'
})
export class MenuLateralPage {

    menuOpc: IMenu[] = [

        { label: 'Inicio', icon: 'home' },
        { label: 'Pedidos', icon: 'clipboard' },
        { label: 'Carrito', icon: 'cart' }

    ]

    mainContent: any;

    constructor(public navCtrl: NavController) {
        this.mainContent = HomePage;
    }

    selectMenu(index: number) {
        switch (index) {
            case 0:
                this.mainContent = HomePage;
                break;
            case 1:
                this.mainContent = PedidosPage;
                break;
            case 2:
                this.mainContent = CarritoPage;
                break;
            default:
                this.mainContent = HomePage;
                break;
        }

    }

    logout() {
        this.navCtrl.setRoot(LoginPage);
    }
}

export interface IMenu {
    label: string;
    icon: string;
}