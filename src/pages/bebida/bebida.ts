import { Component } from '@angular/core';

import { Bebida, BebidaData } from '../../providers/bebidas-data';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bebida',
  templateUrl: 'bebida.html'
})
export class BebidaPage {

  Bebidas: Bebida[];
  constructor(public navCtrl: NavController, public service: BebidaData) {
    this.Bebidas = [];
  }

  ionViewDidEnter() {
    this.Bebidas = this.service.data;
  }

  añadirCarrito(){
    
  }
}
