import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {
  mutante:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mutante = this.navParams.get('personaje');

  }

  irAtras() {
    this.navCtrl.pop();
  }

  irRoot() {
    this.navCtrl.popToRoot();
  }

}
