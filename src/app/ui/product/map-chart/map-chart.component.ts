import { Component, OnInit } from '@angular/core';
import { GeoService } from '../../../services/geo.service';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.scss', './map-style.scss']
})


export class MapChartComponent implements OnInit {
  countryList: any[];
  provinceList: any[];
  addressData: any;
  mapChart: any;
  showSearchPanel: boolean;
  constructor(private _gs: GeoService, private httpS: HttpService) {
    this.countryList = _gs.getCountry();
    this.addressData = {
      country: 'CA',
      province: 'BC',
      streetNum: '',
      streetName: '',
      city: 'Vancouver',
      postalCode: '',
      zoomSize: 16,
    };
    this.changeCountry('CA');
  }

  ngOnInit() {
    this.search();
    this.showSearchPanel = true;
  }

  changeCountry(country) {
    this.provinceList = this._gs.getProvince(country);
  }

  search() {
    let param = {
      country: this.addressData.country,
      street: this.addressData.streetNum + ' ' + this.addressData.streetName,
      city: this.addressData.city,
      state: this.addressData.province,
      postalcode: this.addressData.postalcode,
      format: 'json'
    }
    this._gs.search(param, this.addressData.zoomSize);
    this.showSearchPanel = false;
  }

  triggerSearchPanel() {
    this.showSearchPanel = !this.showSearchPanel;
  }
}

