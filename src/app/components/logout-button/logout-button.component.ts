import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap } from 'rxjs/operators';
import { callbackUri } from '../../auth.config';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

  logout() {
    this.auth
      .buildLogoutUrl({ returnTo: callbackUri })
      .pipe(
        mergeMap(async (url) => {
          await Browser.open({ url, windowName: '_self' });
          this.auth.logout({ localOnly: true });
        })
      )
      .subscribe();
  }

}
