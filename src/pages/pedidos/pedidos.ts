import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from 'ionic-angular';
import { Producto } from "../models/producto";
import { Pedido } from '../models/pedido'

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {

  data = {usuario:"",password:""};
  productos: Producto[];
  pedido: Pedido;
  constructor(public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController) {
      this.productos=[];
      this.pedido={estado:0,productos:[]};
  }

  ionViewDidEnter(){
    this.storage.get("user").then((val)=>{
        this.data= { usuario:val.nombre,password:val.password};
      });
    this.storage.get(this.data.usuario).then(val=>{
      this.productos=JSON.parse(val);  
    });
    this.storage.get("pedido").then(val=>{
      this.pedido = {estado:val, productos:[]};
    });
    this.pedido = {estado: this.pedido.estado,productos:this.productos};
  }
  
  actualizarPedido(){
     this.storage.get("pedido").then(val=>{
      this.pedido = {estado:val, productos:this.productos};
    });
  }

}