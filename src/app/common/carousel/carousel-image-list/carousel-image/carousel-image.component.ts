import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.scss'],
  inputs: ['src', 'type']
})
export class CarouselImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
