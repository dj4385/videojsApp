import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'videojsApp';
  videoOption = {
    src: 'https://mekya.github.io/web_test/paragliding_360.m3u8',
    type: 'application/x-mpegURL'
  }
  constructor() {}

  ngOnInit() {}
}
