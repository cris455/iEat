import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Producto } from '../models/producto';
import { Usuario } from '../models/usuario'
import { MenuLateralPage } from "../MenuLateral/menulateral";

@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html'
})
export class CarritoPage {

  productos: Producto[] = [];
  producto: Producto;
  total: number;
  totalpedido: number;
  cantidad: number;
  constructor(public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController) {
    this.totalpedido = 0;
  }
  ionViewDidEnter() {

    this.storage.get("ventas").then(val => {
      if (Number.isInteger(val)) {
        this.total = val;
      }
    })
    this.storage.get("0").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Pepsi", cantidad: val, total: (val * 2000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 2000);
      }
    });
    this.storage.get("1").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Manzana", cantidad: val, total: (val * 2000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 2000);
      }
    });
    this.storage.get("2").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Coca-cola", cantidad: val, total: (val * 2000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 2000);
      }
    });
    this.storage.get("3").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Hit Mora", cantidad: val, total: (val * 1800) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 1800);
      }
    });
    this.storage.get("4").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Hit Mango", cantidad: val, total: (val * 1800) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 1800);
      }
    });
    this.storage.get("5").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Consome", cantidad: val, total: (val * 6000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 6000);
      }
    });
    this.storage.get("6").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Costilla", cantidad: val, total: (val * 12000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 12000);
      }
    });
    this.storage.get("7").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Chuleta", cantidad: val, total: (val * 12000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 12000);
      }
    });
    this.storage.get("8").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Pollo Broaster", cantidad: val, total: (val * 20000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 20000);
      }
    });
    this.storage.get("9").then(val => {
      if (val != 0) {
        this.producto = { nombre: "P. Hawaina", cantidad: val, total: (val * 4000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 4000);
      }
    });
    this.storage.get("10").then(val => {
      if (val != 0) {
        this.producto = { nombre: "P. Jamon y Queso", cantidad: val, total: (val * 4000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 4000);
      }
    });
    this.storage.get("11").then(val => {
      if (val != 0) {
        this.producto = { nombre: "P. Vegetariana", cantidad: val, total: (val * 4000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 4000);
      }
    });
    this.storage.get("12").then(val => {
      if (val != 0) {
        this.producto = { nombre: "P. Especial", cantidad: val, total: (val * 5000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 5000);
      }
    });
    this.storage.get("13").then(val => {
      if (val != 0) {
        this.producto = { nombre: "P. Pepperoni", cantidad: val, total: (val * 5000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 5000);
      }
    });
    this.storage.get("14").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Tres Leches", cantidad: val, total: (val * 7000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 7000);
      }
    });
    this.storage.get("15").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Helado", cantidad: val, total: (val * 3000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 3000);
      }
    });
    this.storage.get("16").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Fresas con Crema", cantidad: val, total: (val * 5000) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 5000);
      }
    });
    this.storage.get("17").then(val => {
      if (val != 0) {
        this.producto = { nombre: "Flan", cantidad: val, total: (val * 4500) };
        this.productos.push(this.producto);
        this.totalpedido = this.totalpedido + (val * 4500);
      }
    });

  }

  hacerPedido() {
    let toast;
    let user: Usuario;
    user = { usuario: "", password: "" };
    if (this.totalpedido != 0) {
      this.total = this.total + this.totalpedido;
      this.storage.set("ventas", this.total);
      toast = this.toastCtrl.create({
        message: 'Su orden fue añadida con éxito',
        duration: 2000
      });
      toast.present();
      this.storage.get("user").then(val => {
        user = { usuario: val.usuario, password: val.password };
      });
      let str: string = user.usuario;
      console.log("primera:"+JSON.stringify(this.productos)); 
      this.storage.set(str, JSON.stringify(this.productos));
      this.storage.set("pedido", 0);
      this.storage.get("productos").then(val => {  
      console.log("segunda:"+JSON.stringify(this.productos)); 
        if (val==null) {
          this.storage.set("productos", JSON.stringify(this.productos));
        }
        else {
          let viejos:Producto[] = JSON.parse(val);
          for(let i=0; i<viejos.length ; i++){
            this.productos.push(viejos[i]);
          }
          console.log(JSON.stringify(viejos));
          this.storage.set("productos", JSON.stringify(this.productos));
        }
         this.productos = [];
      });
      this.storage.set("0", 0);
      this.storage.set("1", 0);
      this.storage.set("2", 0);
      this.storage.set("3", 0);
      this.storage.set("4", 0);
      this.storage.set("5", 0);
      this.storage.set("6", 0);
      this.storage.set("7", 0);
      this.storage.set("8", 0);
      this.storage.set("9", 0);
      this.storage.set("10", 0);
      this.storage.set("11", 0);
      this.storage.set("12", 0);
      this.storage.set("13", 0);
      this.storage.set("14", 0);
      this.storage.set("15", 0);
      this.storage.set("16", 0);
      this.storage.set("17", 0);
      this.totalpedido = 0;
    } else {
      toast = this.toastCtrl.create({
        message: 'Debe primero ordenar algo',
        duration: 2000
      });
      toast.present();
    }
  }
  cancelarPedido() {
    this.storage.set("0", 0);
    this.storage.set("1", 0);
    this.storage.set("2", 0);
    this.storage.set("3", 0);
    this.storage.set("4", 0);
    this.storage.set("5", 0);
    this.storage.set("6", 0);
    this.storage.set("7", 0);
    this.storage.set("8", 0);
    this.storage.set("9", 0);
    this.storage.set("10", 0);
    this.storage.set("11", 0);
    this.storage.set("12", 0);
    this.storage.set("13", 0);
    this.storage.set("14", 0);
    this.storage.set("15", 0);
    this.storage.set("16", 0);
    this.storage.set("17", 0);
    this.totalpedido = 0;
    let toast = this.toastCtrl.create({
      message: 'Su orden fue cancelada',
      duration: 2000
    });
    toast.present();
    this.navCtrl.setRoot(MenuLateralPage);
  }

}