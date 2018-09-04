import { Component } from '@angular/core';
import {  NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

  nombre: string ='';
  apellido: string ='';

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    console.log("nombre", this.nombre);
    console.log("apellido", this.apellido);
  }

  cerrarConParametros() {
    // Cerramos el modal enviando parametros a la vista que solicito el modal
    let data = {
      nombre: 'Claudio',
      apellido: 'Torres',
      edad: 31
    }
    this.viewCtrl.dismiss( data );
  }

  cerrarSinParametros() {
    this.viewCtrl.dismiss();
  }

}
