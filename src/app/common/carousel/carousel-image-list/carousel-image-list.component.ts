import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import {trigger, transition, style, useAnimation, animate} from "@angular/animations";

import { fadeAnimation, slideAnimation } from "../../../../animations";
import { DeviceService } from '../../../services/device.service';
import { GalleryService } from '../../../services/gallery.service';


@Component({
  selector: 'app-carousel-image-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './carousel-image-list.component.html',
  styleUrls: ['./carousel-image-list.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      // fade in & out:
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

      // slide left:
      transition('*=>leftSlideLeft', [
        useAnimation(slideAnimation, {params:
          {
            left: '-240%',
            time: '0.8s'
          }
        })
      ]),
      transition('*=>centerSlideLeft', [
        useAnimation(slideAnimation, {params:
          {
            left: '-120%',
            time: '0.8s'
          }
        })
      ]),
      transition('*=>rightSlideLeft', [
        useAnimation(slideAnimation, {params:
          {
            left: '0%',
            time: '0.8s'
          }
        })
      ]),

      // slide right:
      transition('*=>leftSlideRight', [
        useAnimation(slideAnimation, {params:
          {
            left: '0%',
            time: '0.8s'
          }
        })
      ]),
      transition('*=>centerSlideRight', [
        useAnimation(slideAnimation, {params:
          {
            left: '120%',
            time: '0.8s'
          }
        })
      ]),
      transition('*=>rightSlideRight', [
        useAnimation(slideAnimation, {params:
          {
            left: '240%',
            time: '0.8s'
          }
        })
      ]),

      // slide reset:
      transition('*=>leftReset', [
        useAnimation(slideAnimation, {params:
          {
            left: '-120%',
            time: '0s'
          }
        })
      ]),
      transition('*=>centerReset', [
        useAnimation(slideAnimation, {params:
          {
            left: '0%',
            time: '0s'
          }
        })
      ]),
      transition('*=>rightReset', [
        useAnimation(slideAnimation, {params:
          {
            left: '120%',
            time: '0s'
          }
        })
      ])
    ])
  ],
  inputs: ['data', 'animationConfig']
})
export class CarouselImageListComponent implements OnInit {
  @ViewChild('imgList')
  eleRef: ElementRef;

  data: any;
  animationConfig: any = {};
  leftCarouselImage: string = '';
  centerCarouselImage: string = '';
  rightCarouselImage: string = '';
  disableBtn: boolean = false;
  fullScreen: boolean = false;
	h: number;
	w: number;

  constructor(private _ds: DeviceService, private _gs: GalleryService) {
  }

  ngOnInit() {
    this.animationConfig.time = this.animationConfig.time?this.animationConfig.time:0.8;
    this.animationConfig.type = this.animationConfig.type?this.animationConfig.type:'slide';
    this.animationConfig.type = 'slide';
		this._ds.height$.subscribe(data => this.h = data);
		this._ds.width$.subscribe(data => this.w = data);
    this._gs.currIndex = 0;
    console.log(this.data);
  }

  ngAfterViewInit() {
    console.log(this.eleRef);
  }

  fade(num: number) {
    this.leftCarouselImage = 'fadeOut';
    this.centerCarouselImage = 'fadeOut';
    this.rightCarouselImage = 'fadeOut';
    setTimeout(()=>{
      this.changeIndex(num);
      this.leftCarouselImage = 'fadeIn';
      this.centerCarouselImage = 'fadeIn';
      this.rightCarouselImage = 'fadeIn';
    }, 400);
    setTimeout(()=>{
      this.disableBtn = false;
    }, 400);
  }

  slide(num: number) {
    let animateAction = num>0?'SlideLeft':'SlideRight';
    this.leftCarouselImage = 'left' + animateAction;
    this.centerCarouselImage = 'center' + animateAction;
    this.rightCarouselImage = 'right' + animateAction;
    setTimeout(()=>{
      this.changeIndex(num);
      this.leftCarouselImage = 'leftReset';
      this.centerCarouselImage = 'centerReset';
      this.rightCarouselImage = 'rightReset';
      this.disableBtn = false;
    }, 600);
  }

  changeIndex(num: number) {
    this._gs.currIndex = this._gs.currIndex + num;
    if(this._gs.currIndex<0){this._gs.currIndex=0;}
    if(this._gs.currIndex>=this.data.photos.length){this._gs.currIndex=this.data.photos.length-1;}
  }
  changePicture(num: number) {
    console.log(num);
    if(this._gs.currIndex + num<0||this._gs.currIndex + num>=this.data.photos.length) {
      console.log('hit border', this._gs.currIndex + num, this.data.photos.length);
      return;
    }
    if(!this.disableBtn) {
      this.disableBtn = true;
      switch(this.animationConfig.type) {
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

  enterfullScreen() {
    this.fullScreen = true;
    if(this.eleRef.nativeElement.requestFullscreen) {
      this.eleRef.nativeElement.requestFullscreen();
    } else if ( this.eleRef.nativeElement.webkitRequestFullscreen ) {
      this.eleRef.nativeElement.webkitRequestFullscreen();
    } else if ( this.eleRef.nativeElement.mozRequestFullScreen ) {
      this.eleRef.nativeElement.mozRequestFullScreen();
    } else if ( this.eleRef.nativeElement.msRequestFullscreen ) {
      this.eleRef.nativeElement.msRequestFullscreen();
    }
  }

  exitfullScreen() {
    this.fullScreen = false;

    if(document['exitFullscreen']) {
      document['exitFullscreen']();
    } else if ( document['webkitExitFullscreen'] ) {
      document['webkitExitFullscreen']();
    } else if ( document['mozCancelFullScreen'] ) {
      document['mozCancelFullScreen']();
    } else if ( document['msExitFullscreen'] ) {
      document['msExitFullscreen']();
    }
  }

}
