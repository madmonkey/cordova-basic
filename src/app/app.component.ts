import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.checkAuth();
  }

  logout() {
    this.authService.signOut();
  }

  login() {
    this.authService.doLogin();
  }
  checkAuth(url?: string) {
  if(!this.authService.isLoggedIn){
    this.login();
  }
  }
}
