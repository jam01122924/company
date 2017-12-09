import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../services/gallery.service';

// import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';

@Component({
  selector: 'app-gallery-show',
  templateUrl: './gallery-show.component.html',
  styleUrls: ['./gallery-show.component.scss']
})
export class GalleryShowComponent implements OnInit {
  openModalWindow: boolean = false;
  imagePointer: number = 0;
  carouselConfig: any;
  showMap: boolean = false;

  constructor(private _gs: GalleryService) { }

  ngOnInit() {
    this.carouselConfig = {
      fullSize: true,
      animationConfig: {
        type: 'fade',
        time: 0.8,
      },

    }
  }

}
