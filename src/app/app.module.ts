import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PizzaData } from '../providers/pizzas-data';
import { BebidaData } from '../providers/bebidas-data';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BebidaPage } from "../pages/bebida/bebida";
import { PizzaPage } from "../pages/pizza/pizza";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    BebidaPage,
    HomePage,
    TabsPage,
    LoginPage,
    PizzaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    BebidaPage,
    HomePage,
    TabsPage,
    LoginPage,
    PizzaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaData,
    BebidaData
  ]
})
export class AppModule {}
