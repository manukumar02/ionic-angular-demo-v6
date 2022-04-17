import { Component } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dummy = [
    { name: 'Shyam', email: 'shyamjaiswal@gmail.com' },
    { name: 'Bob', email: 'bob32@gmail.com' },
    { name: 'Jai', email: 'jai87@gmail.com' },
  ];
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController
  ) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Action Sheet',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          },
        },
      ],
      cssClass: 'custom-class',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
    });

    actionSheet.present();
  }

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
