import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username:string;
 password:string;
 myrec:string[];
 mypass:string[];
 found:number;
 constructor(public navCtrl: NavController, public AlertCtrl: AlertController) {
  this.myrec=["joshua","lilay","nikkie"];
  this.mypass=["111","222","333"]
  this.found=0;
  }
  login(){
    console.log("Username: "+ this.username);
    console.log("Password: "+ this.password);
    for (let x = 0; x < this.myrec.length; x++) {
      console.log("Array nako: "+ this.myrec[x]);
        if( this.username == this.myrec[x] && this.password == this.mypass[x])
        {
            this.found = 1;
        }
  }
  if( this.found == 1)
  {
       let alert = this.AlertCtrl.create({
        title: 'Login Succeeded!',
        subTitle: "Welcome to this Ionic App" ,
        buttons: ['OK']
        
        });
   this.navCtrl.push(AboutPage);  
   alert.present(); 
  }
  else{

      let alert = this.AlertCtrl.create({
        title: 'Login Failed!',
        subTitle: "You don't have an account!",
        buttons: ['OK']
      });
      alert.present();
  }
  }

}
