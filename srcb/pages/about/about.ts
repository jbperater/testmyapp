import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  num1:number;
  num2:number;
  total:number;
  ans:number;

  constructor(public navCtrl: NavController) {

  }

  add(){
    this.total = Number(this.num1) + Number(this.num2);
    this.ans=this.total;
  }

  sub(){
    this.total=this.num1-this.num2;
    this.ans=this.total;
  }

  mul(){
    this.total=this.num1*this.num2;
    this.ans=this.total;
  }

  div(){
    this.total=this.num1/this.num2;
    this.ans=this.total;
  }

}
