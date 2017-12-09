import { Component, OnInit, Input } from '@angular/core';
import { GalleryService } from '../../../../services/gallery.service';
import { GeoService } from '../../../../services/geo.service';

@Component({
  selector: 'app-gallery-list-item',
  templateUrl: './gallery-list-item.component.html',
  styleUrls: ['./gallery-list-item.component.scss'],
})
export class GalleryListItemComponent implements OnInit {
  icon: string = '';
  isOpen: boolean = true;
  @Input()
  private data: any;
  @Input('indexArr')
  private indexArr: Array<number>;

  constructor(private _gs: GalleryService, private _geos: GeoService) {
  }

  ngOnInit() {
    this.icon = (this.data&&this.data.subFolder===undefined)?'picture-o':(this.data&&this.isOpen)?'folder-open':this.data?'folder':'window-close-o';
  }
  trigger() {
    this.isOpen = !this.isOpen;
    this.icon = (this.data&&this.data.subFolder===undefined)?'picture-o':(this.data&&this.isOpen)?'folder-open':this.data?'folder':'window-close-o';
    if(this.icon === 'picture-o') {
      console.log(this.indexArr);
      this._gs.selectData(this.indexArr);

      console.log(this._gs.currentData);

      let param = {
        country: this._gs.currentData.addressData.country?this._gs.currentData.addressData.country:'',
        street: this._gs.currentData.addressData.street?this._gs.currentData.addressData.street:'',
        city: this._gs.currentData.addressData.city?this._gs.currentData.addressData.city:'',
        state: this._gs.currentData.addressData.state?this._gs.currentData.addressData.state:'',
        postalcode: this._gs.currentData.addressData.postalcode?this._gs.currentData.addressData.postalcode:'',
        format: 'json'
      }
      this._geos.search(param, this._gs.currentData.addressData.zoomSize, 'mapChart001');
    }
  }

}
