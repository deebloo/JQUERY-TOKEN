import { Component, Inject } from '@angular/core';
import { JQUERY_TOKEN } from './jquery-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(@Inject(JQUERY_TOKEN) $) {
    console.log($);
  }
}
