import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-caregiver',
  templateUrl: 'caregiver.html'
})
export class CareGiverPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  infoCareTaker() {

  }

  addCareTaker() {
    let prompt = this.alertCtrl.create({
      title: 'Maak een nieuwe mantelzorger aan',
      message: "Geef je naam op",
      inputs: [
        {
          name: 'name',
          placeholder: 'Naam'
        },
      ],
      buttons: [
        {
          text: 'Annuleren',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Bewaar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
