import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

import { ButtonAlertComponent } from 'il2022';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss'],
})
export class LibreriaComponent implements OnInit {

  constructor(public mylib: ButtonAlertComponent) { }

  async ngOnInit() {
    this.mylib.ngOnInit();
    // let url='http://kemba.com.co';
    // await Browser.open({ url, windowName: '_self', presentationStyle: 'popover', toolbarColor: '#e0bb2e' });
  }

}
