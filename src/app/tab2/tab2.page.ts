import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  person = { name: '', country: '' };
  name: string;
  storageName: string;
  country: string;

  constructor(
    private storage: StorageService,
    public route: Router
  ) {
    console.log('memoria');
  }


  ngOnInit(): void {
    console.log('memoria');

  }

  setStorage() {
    console.log(this.name);
    this.storage.setString('name', this.name);
    this.storage.setObject('person', {
      name: this.name,
      country: this.country
    });
  }

  getStorage() {
    this.storage.getString('name').then((data: any) => {
      if (data.value) {
        this.storageName = data.value;
      }
    });
    this.storage.getObject('person').then((data: any) => {
      this.person = data;
    });
  }

  clearStorage() {
    this.storage.removeItem('name');
  }

  

}
