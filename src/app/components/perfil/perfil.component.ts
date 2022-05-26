import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  user$ = this.auth.isAuthenticated$.pipe(switchMap(() => this.auth.user$));
  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
