import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private zone: NgZone) {}
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

    (window as any).handleOpenURL = (url: string) => {
      this.zone.run(() => {
        this.authService.checkAuth(url);
      });
    };
  }
}
