import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the types from the SDK
import { AuthConfig, AuthModule } from '@auth0/auth0-angular';
import { MyLibComponent } from 'il02022-lib';
import { domain, clientId, callbackUri } from './auth.config';
import { ButtonAlertComponent, ButtonAlertModule } from 'il2022';
import { IonicTelInputModule} from 'ionic-tel-input';
         

const config: AuthConfig = {
  domain,
  clientId,
  redirectUri: callbackUri,
  /* Uncomment the following lines for better support  in browers like Safari where third-party cookies are blocked.
    See https://auth0.com/docs/libraries/auth0-single-page-app-sdk#change-storage-options for risks.
  */
  // cacheLocation: "localstorage",
  // useRefreshTokens: true
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
  [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AuthModule.forRoot(config),
    ButtonAlertModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ButtonAlertModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
