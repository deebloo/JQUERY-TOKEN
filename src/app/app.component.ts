import { Component, Inject, AfterViewInit } from '@angular/core';
import { JQUERY_TOKEN } from './jquery-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  constructor(@Inject(JQUERY_TOKEN) private $: any) {
    console.log($);
  }

  ngAfterViewInit() {
    this.$('#hi').text('asdfasdf');
  }
}
