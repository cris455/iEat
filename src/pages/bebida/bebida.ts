import { Component } from '@angular/core';

import { Bebida, BebidaData } from '../../providers/bebidas-data';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-bebida',
  templateUrl: 'bebida.html'
})
export class BebidaPage {

  Bebidas: Bebida[];
  constructor(public navCtrl: NavController, public service: BebidaData, public storage: Storage, public toastCtrl: ToastController) {
    this.Bebidas = [];
  }

  ionViewDidEnter() {
    this.Bebidas = this.service.data;
  }

  

  addCarrito(index: number) {
    let cantidad:number ;
    let toast = this.toastCtrl.create({
      message: 'Su pedido se agregó al carrrito',
      duration: 2000
    });
    switch (index) {
      case 0:
        this.storage.get("0").then(val => {
          cantidad = val + 1;
          this.storage.set("0", cantidad);
          console.log(cantidad);
        });
        toast.present();
        break;
      case 1:
        this.storage.get("1").then(val => {
          cantidad = val + 1;
          this.storage.set("1", cantidad);
        });
        toast.present();
        break;
      case 2:
       this.storage.get("2").then(val => {
          cantidad = val + 1;
          this.storage.set("2", cantidad);
        });
        toast.present();
        break;
      case 3:
        this.storage.get("3").then(val => {
          cantidad = val + 1;
          this.storage.set("3", cantidad);
        });
        toast.present();
        break;
      case 4:
        this.storage.get("4").then(val => {
          cantidad = val + 1;
          this.storage.set("4", cantidad);
        });
        toast.present();
        break;
      default:
        break;
    }

  }
}
