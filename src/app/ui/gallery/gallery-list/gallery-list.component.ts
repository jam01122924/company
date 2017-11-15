import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  constructor(private _gs: GalleryService) { }

  ngOnInit() {
  }

}
