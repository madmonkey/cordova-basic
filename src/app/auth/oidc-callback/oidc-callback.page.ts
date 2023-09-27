import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oidc-callback',
  templateUrl: './oidc-callback.page.html',
  styleUrls: ['./oidc-callback.page.scss'],
})
export class OidcCallbackPage implements OnInit {

  constructor() {

  }

  ngOnInit() {
    /*
    window.addEventListener('message', (event) => {
      if (event.data.match(/^oauth::/)) {
        var data = JSON.parse(event.data.substring(7));
        console.table(event.data);
        console.table(data);
        // Use data.code
      }
  });

     */
  }

}
