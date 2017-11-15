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
  data: any;
  carouselConfig: any;

  constructor(private _gs: GalleryService) { }

  ngOnInit() {
    this.data = this._gs.data[0].subFolder[0].subFolder[0];
    this.carouselConfig = {
      fullSize: true,
      animation: 'fade',

    }
  }

}
