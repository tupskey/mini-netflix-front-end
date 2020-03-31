import { Component } from '@angular/core';

@Component({
  selector: 'film-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class FilmsAppComponent {
  title = 'topflix';
}
