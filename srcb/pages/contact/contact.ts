import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  textlang:any;
  anyarr:String[];

  constructor(public navCtrl: NavController) {
      this.anyarr=["I","Miss","Lilay"];   
  }

  add(){
    this.anyarr.push(this.textlang);
  }

  remove(no){
    (this.anyarr).slice(no,1);
  }
}
