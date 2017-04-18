import { Component } from '@angular/core';

import { Comida, ComidaData } from '../../providers/comidas-data';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-comida',
  templateUrl: 'comida.html'
})
export class ComidaPage {

  Comidas: Comida[];
  constructor(public navCtrl: NavController, public service: ComidaData, public storage:Storage, public toastCtrl:ToastController) {
    this.Comidas = [];
  }

  ionViewDidEnter() {
    this.Comidas = this.service.data;
  }

  addCarrito(index: number) {
    let cantidad:number ;
    let toast = this.toastCtrl.create({
      message: 'Su pedido se agregó al carrrito',
      duration: 2000
    });
    switch (index) {
      case 0:
        this.storage.get("5").then(val => {
          cantidad = val + 1;
          this.storage.set("5", cantidad);
          console.log(cantidad);
        });
        toast.present();
        break;
      case 1:
        this.storage.get("6").then(val => {
          cantidad = val + 1;
          this.storage.set("6", cantidad);
        });
        toast.present();
        break;
      case 2:
       this.storage.get("7").then(val => {
          cantidad = val + 1;
          this.storage.set("7", cantidad);
        });
        toast.present();
        break;
      case 3:
        this.storage.get("8").then(val => {
          cantidad = val + 1;
          this.storage.set("8", cantidad);
        });
        toast.present();
        break;
      default:
        break;
    }

  }
}
