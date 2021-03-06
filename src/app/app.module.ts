import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import { PizzaData } from '../providers/pizzas-data';
import { BebidaData } from '../providers/bebidas-data';
import { ComidaData } from '../providers/comidas-data';
import { PostreData } from '../providers/postres-data';

import { BebidaPage } from "../pages/bebida/bebida";
import { PedidosPage } from '../pages/pedidos/pedidos';
import { CarritoPage } from '../pages/carrito/carrito';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuLateralPage } from '../pages/MenuLateral/menulateral';
import { PizzaPage } from '../pages/pizza/pizza';
import { ComidaPage } from '../pages/comida/comida';
import { PostrePage } from '../pages/postre/postre';
import { AdminPage } from '../pages/admin/admin';
import { UsuarioData } from "../providers/login-data";
import { LoginService } from "../providers/login-service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
  declarations: [
    MyApp,
    BebidaPage,
    HomePage,
    LoginPage,
    MenuLateralPage,
    PedidosPage,
    CarritoPage,
    PizzaPage,
    ComidaPage,
    PostrePage,
    AdminPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BebidaPage,
    HomePage,
    LoginPage,
    MenuLateralPage,
    PedidosPage,
    CarritoPage,
    PizzaPage,
    ComidaPage,
    PostrePage,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaData,
    BebidaData,
    ComidaData,
    PostreData,
    UsuarioData,
    LoginService
  ]
})
export class AppModule {}
