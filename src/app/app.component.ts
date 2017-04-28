import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage'
//import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { MenuLateralPage } from '../pages/MenuLateral/menulateral'
import { AdminPage } from "../pages/admin/admin";
//import { TabsPage } from "../pages/tabs/tabs";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {
    
    storage.ready().then(()=>{
      let usuario:string;
      storage.get("user").then(val=>{
          usuario=val.nombre;
      });
      storage.get("logged").then((val)=>{
        if(val){
          if(usuario=="admin"){
            this.rootPage=AdminPage;
          }else{
            this.rootPage=MenuLateralPage;
          }
        }else{
          this.rootPage=LoginPage;
        }
      });
      storage.set("0",0);
      storage.set("1",0);
      storage.set("2",0);
      storage.set("3",0);
      storage.set("4",0);
      storage.set("5",0);   
      storage.set("6",0);
      storage.set("7",0);
      storage.set("8",0);   
      storage.set("9",0);
      storage.set("10",0);
      storage.set("11",0);
      storage.set("12",0);
      storage.set("13",0);
      storage.set("14",0);
      storage.set("15",0);
      storage.set("16",0);
      storage.set("17",0);
   });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
