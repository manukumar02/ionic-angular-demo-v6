import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
