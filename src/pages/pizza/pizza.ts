import { Component } from '@angular/core';

import { Pizza, PizzaData } from '../../providers/pizzas-data';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html'
})
export class PizzaPage {

  Pizzas: Pizza[];
  constructor(public navCtrl: NavController, public service: PizzaData) {
    this.Pizzas = [];
  }

  ionViewDidEnter() {
    this.Pizzas = this.service.data;
  }

  añadirCarrito(){
    
  }
}