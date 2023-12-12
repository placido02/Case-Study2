import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Homepage', url: '/folder/homepage', icon: 'mail' },
    { title: 'Frontpage', url: '/folder/datail/datail', icon: 'mail' },
    { title: 'References', url: '/folder/reference/reference', icon: 'mail' },
  ];
  
  constructor() {}
}
