import { Component, OnInit } from '@angular/core';
import { GeoService } from '../../../../services/geo.service';
import { GalleryService } from '../../../../services/gallery.service';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'app-gallery-map',
  templateUrl: './gallery-map.component.html',
  styleUrls: ['./gallery-map.component.scss']
})


export class GalleryMapComponent implements OnInit {
  countryList: any[];
  provinceList: any[];
  mapChart: any;
  showSearchPanel: boolean;
  constructor(private _geos: GeoService, private _gs: GalleryService, private httpS: HttpService) {
  }

  ngOnInit() {
    this.countryList = this._geos.getCountry();

    this.changeCountry(this._gs.currentData.addressData.country?this._gs.currentData.addressData.country:'CA');
    this.search();
  }

  ngOnDestroy() {
    this._geos.destroyMap();
  }

  changeCountry(country) {
    this.provinceList = this._geos.getProvince(country);
  }

  search() {
    console.log(this._gs.currentData.addressData)
    let param = {
      country: this._gs.currentData.addressData.country?this._gs.currentData.addressData.country:'CA',
      street: (this._gs.currentData.addressData.streetNum?this._gs.currentData.addressData.streetNum:'') + (this._gs.currentData.addressData.streetName?(' ' + this._gs.currentData.addressData.streetName):''),
      city: this._gs.currentData.addressData.city?this._gs.currentData.addressData.city:'',
      state: this._gs.currentData.addressData.state?this._gs.currentData.addressData.state:'',
      postalcode: this._gs.currentData.addressData.postalcode?this._gs.currentData.addressData.postalcode:'',
      format: 'json'
    }
    this._geos.search(param, this._gs.currentData.addressData.zoomSize, 'mapChart001');
    this.showSearchPanel = false;
  }

  triggerSearchPanel() {
    this.showSearchPanel = !this.showSearchPanel;
  }
}
