import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  inputs: ['data', 'config']
})
export class CarouselComponent implements OnInit {
  data: any = {};
  config: any = {};
  fullscreen: boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

}
