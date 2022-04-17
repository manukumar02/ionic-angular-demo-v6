import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        firstName: 'Douglas',
        lastName: 'Adams',
        middleInitial: 'N',
      },
    });
    return await modal.present();
  }
}
