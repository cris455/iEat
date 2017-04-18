import { Component } from '@angular/core';

import { Pizza, PizzaData } from '../../providers/pizzas-data';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html'
})
export class PizzaPage {

  Pizzas : Pizza[];
  constructor(public navCtrl: NavController, public service: PizzaData, public storage: Storage, public toastCtrl: ToastController) {
    this.Pizzas = [];
  }

  ionViewDidEnter() {
    this.Pizzas = this.service.data;
  }

  addCarrito(index: number) {
    let cantidad:number ;
    let toast = this.toastCtrl.create({
      message: 'Su pedido se agregó al carrrito',
      duration: 2000
    });
    switch (index) {
      case 0:
        this.storage.get("9").then(val => {
          cantidad = val + 1;
          this.storage.set("9", cantidad);
          console.log(cantidad);
        });
        toast.present();
        break;
      case 1:
        this.storage.get("10").then(val => {
          cantidad = val + 1;
          this.storage.set("10", cantidad);
        });
        toast.present();
        break;
      case 2:
       this.storage.get("11").then(val => {
          cantidad = val + 1;
          this.storage.set("11", cantidad);
        });
        toast.present();
        break;
      case 3:
        this.storage.get("12").then(val => {
          cantidad = val + 1;
          this.storage.set("12", cantidad);
        });
        toast.present();
        break;
      case 4:
        this.storage.get("13").then(val => {
          cantidad = val + 1;
          this.storage.set("13", cantidad);
        });
        toast.present();
        break;
      default:
        break;
    }
  }
}
