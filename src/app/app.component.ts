import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  template: `<h1>Hello World!</h1>
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/images/home.png" alt="logo" width=5% aria-hidden="true"><span>Home</span>  
    </header> 
    <section class="content">
      <app-home></app-home>
    </section>
  </main> `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})

export class AppComponent {
  title = 'angular-app';
}
