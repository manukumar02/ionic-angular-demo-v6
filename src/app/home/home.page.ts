import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

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
  constructor(public actionSheetCtrl: ActionSheetController) {}

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
}
