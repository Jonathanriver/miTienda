import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LoginButtonComponent } from '../components/login-button/login-button.component';
import { LogoutButtonComponent } from '../components/logout-button/logout-button.component'; 
import { PerfilComponent } from '../components/perfil/perfil.component';
import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page,PerfilComponent, LoginButtonComponent, LogoutButtonComponent]
})
export class Tab3PageModule {}
