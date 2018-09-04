import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from '../index.paginas';
/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  pagina3: any = Pagina3Page;
  
  mutantes: any [] = [
    {
      name: 'Gambito',
      poder: 'Dar energio a objetos inanimados'
    },
    {
      name: 'Profesor X',
      poder: 'Psiquis'
    },
    {
      name: 'Wolverine',
      poder: 'Regeneracion'
    },
    {
      name: 'Magneto',
      poder: 'Manejo de objetos metalicos'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  redirectPage3(mutante: any) {
    this.navCtrl.push(Pagina3Page, { 'personaje': mutante});
  }

}
