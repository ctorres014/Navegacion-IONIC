import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalsPage } from '../index.paginas';
/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController) {
  }


  activarPrincipal() {
    this.navCtrl.parent.select(1) // Activamos el boton principal de la vista padre
    // Le pasamos al select el indice en base cero de la ventana principal
  }

  mostrar_modal() {
    // Enviaremos los parametros a la ventana modal, como segundo parametro del create
    let modal = this.modalCtrl.create(ModalsPage, { nombre: "Claudio", apellido: "Torres"});
    // Abrimos el modal
    modal.present();

    // Recibimos los parametros del enviados por el modals
    modal.onDidDismiss( params => {
      console.log("Data del Modal");
      console.log("Parametros", params);
    });

  }
}
