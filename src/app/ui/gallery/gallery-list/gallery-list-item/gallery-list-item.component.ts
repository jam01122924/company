import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-list-item',
  templateUrl: './gallery-list-item.component.html',
  styleUrls: ['./gallery-list-item.component.scss'],
})
export class GalleryListItemComponent implements OnInit {
  icon: string = '';
  isOpen: boolean = true;
  @Input() private data: any;

  constructor() { }

  ngOnInit() {
    this.icon = (this.data&&this.data.subFolder===undefined)?'picture-o':(this.data&&this.isOpen)?'folder-open':this.data?'folder':'window-close-o';
  }
  trigger() {
    this.isOpen = !this.isOpen;
    this.icon = (this.data&&this.data.subFolder===undefined)?'picture-o':(this.data&&this.isOpen)?'folder-open':this.data?'folder':'window-close-o';
  }

}
