import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public titulo: string = 'Desafios Ionic';
  public cabecalho: string = 'Problema P000';
  public conteudo: string = 'O Ionic é um framework baseado em Angular e Cordova, contando com uma gama de plugins e funcionalidades nativas para criar e compilar uma aplicação mobile ou uma Progressive Web App.';

  constructor(public navCtrl: NavController) {

  }

}
