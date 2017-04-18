import { Component } from '@angular/core';

import { Postre, PostreData } from '../../providers/postres-data';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-postre',
  templateUrl: 'postre.html'
})
export class PostrePage {

  Postres : Postre[];
  constructor(public navCtrl: NavController, public service: PostreData, public storage: Storage, public toastCtrl: ToastController) {
    this.Postres = [];
  }

  ionViewDidEnter() {
    this.Postres = this.service.data;
  }

  addCarrito(index: number) {
    let cantidad:number ;
    let toast = this.toastCtrl.create({
      message: 'Su pedido se agregó al carrrito',
      duration: 2000
    });
    switch (index) {
      case 0:
        this.storage.get("14").then(val => {
          cantidad = val + 1;
          this.storage.set("14", cantidad);
          console.log(cantidad);
        });
        toast.present();
        break;
      case 1:
        this.storage.get("15").then(val => {
          cantidad = val + 1;
          this.storage.set("15", cantidad);
        });
        toast.present();
        break;
      case 2:
       this.storage.get("16").then(val => {
          cantidad = val + 1;
          this.storage.set("16", cantidad);
        });
        toast.present();
        break;
      case 3:
        this.storage.get("17").then(val => {
          cantidad = val + 1;
          this.storage.set("17", cantidad);
        });
        toast.present();
        break;
      default:
        break;
    }
  }
}
