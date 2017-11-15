import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {trigger, transition, style, useAnimation} from "@angular/animations";

import { fadeAnimation, slideAnimation } from "../../../../animations";


@Component({
  selector: 'app-carousel-image-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './carousel-image-list.component.html',
  styleUrls: ['./carousel-image-list.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      transition('*=>fadeIn', [
        style({ opacity: 0 }),
        useAnimation(fadeAnimation, {params:
          {
            from: 0,
            to: 1,
            time: '0.4s'
          }
        })
      ]),
      transition('*=>fadeOut', [
        useAnimation(fadeAnimation, {params:
          {
            from: 1,
            to: 0,
            time: '0.4s'
          }
        })
      ]),
      transition('*=>slideLeft', [
        useAnimation(slideAnimation, {params:
          {
            left: `${animationIndex * 100 + '%'}`,
            time: '0.4s'
          }
        })
      ]),
      transition('*=>slideRight', [
        useAnimation(slideAnimation, {params:
          {
            left: `${animationIndex * 100 + '%'}`,
            time: '0.4s'
          }
        })
      ])
    ])
  ],
  inputs: ['data', 'animation']
})
export class CarouselImageListComponent implements OnInit {
  data: any;
  animation: any;
  currIndex: number = 1;
  scrollDirection: string = 'left';
  disableBtn: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.animation='slide';
  }

  fade(num: number) {
    this.scrollDirection = 'fadeOut';
    setTimeout(()=>{
      this.changeIndex(num);
      this.scrollDirection = 'fadeIn';
    }, 400);
    setTimeout(()=>{
      this.disableBtn = false;
    }, 400);
  }

  slide(num: number) {
    this.scrollDirection = 'slideRight';
    setTimeout(()=>{
      this.changeIndex(num);
      this.scrollDirection = 'stand';
    }, 400);
  }

  changeIndex(num: number) {
    this.currIndex = this.currIndex + num;
    if(this.currIndex<0){this.currIndex=0;}
    if(this.currIndex>=this.data.photos.length){this.currIndex=this.data.photos.length-1;}
  }
  changePicture(num: number) {
    if(!this.disableBtn) {
      this.disableBtn = true;
      console.log('change:', this.animation);
      switch(this.animation) {
        case 'fade':
          this.fade(num);
          break;
        case 'slide':
          this.slide(num);
          console.log('111')
          break;
        default:
          this.fade(num);
          break;
      }
    }
  }

}
