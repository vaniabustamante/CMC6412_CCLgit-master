import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public var1 = "$$f(x) = sin(x^{2}=5) $$";

  constructor(public navCtrl: NavController) {

  }

  p1(){
    this.navCtrl.push("P1Page");
  }

}
