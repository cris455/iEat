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

  data = {usuario:"",password:""};
  productos: Producto[];
  ventas: Producto[];
  pedido: Pedido;
  total: number = 0;
  constructor(public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController) {
   this.ventas=[];   
  }

  ionViewDidEnter(){
    this.storage.get("user").then((val)=>{
        this.data= { usuario:val.nombre,password:val.password};
      });
    this.storage.get(this.data.usuario).then(val=>{
      this.productos=JSON.parse(val);  
    });
    this.storage.get("ventas").then((val)=>{
        this.ventas=JSON.parse(val);
      });
    this.ventas.forEach((u)=>{
        this.total = this.total + u.total; 
    });
  }
  
  actualizarPedido(valor:number){
      this.pedido = {estado:valor,productos:this.productos}; 
  }
}