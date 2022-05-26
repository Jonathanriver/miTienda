import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

  login() {
    this.auth
      .buildAuthorizeUrl()
      .pipe(mergeMap((url) => Browser.open({ url, windowName: '_system', presentationStyle: 'popover', toolbarColor: '#e0bb2e' })))
      .subscribe();
  }

  // openWebpage(url: string) {
  //   const options: InAppBrowserOptions = {
  //     zoom: 'no',
  //     location: 'no',
  //     toolbar: 'no'
  //   };
  //   const browser = this.iab.create('http://sco7.com/filemanager/sapphire/','_self',options);
  // }

}
