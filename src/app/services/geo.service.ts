import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ValueService } from './value.service';

declare const L: any;

@Injectable()
export class GeoService {
  countryData: any[];
  provinceData: any;
  streetTypeData: any[];
  geoData: any;
  map: any;
  LData: any = {};
  currentMapData: any = {};
  defaultLocation: any[] = [{
    lat:49.262428,
    lon:-123.11554
  }];
  nullAddress: boolean = false;

  constructor(private httpS: HttpService, private _vs: ValueService) {
    this.countryData = [
      {text: "United States", value: "US"},
      {text: "Canada", value: "CA"},
    ];
    this.provinceData = {
      US: [
        {text: "Alabama", value: "AL"},
        {text: "Alaska", value: "AK"},
        {text: "American Samoa", value: "AS"},
        {text: "Arizona", value: "AZ"},
        {text: "Arkansas", value: "AR"},
        {text: "California", value: "CA"},
        {text: "Colorado", value: "CO"},
        {text: "Connecticut", value: "CT"},
        {text: "Delaware", value: "DE"},
        {text: "District of Columbia", value: "DC"},
        {text: "Florida", value: "FL"},
        {text: "Georgia", value: "GA"},
        {text: "Guam", value: "GU"},
        {text: "Hawaii", value: "HI"},
        {text: "Idaho", value: "ID"},
        {text: "Illinois", value: "IL"},
        {text: "Indiana", value: "IN"},
        {text: "Iowa", value: "IA"},
        {text: "Kansas", value: "KS"},
        {text: "Kentucky", value: "KY"},
        {text: "Louisiana", value: "LA"},
        {text: "Maine", value: "ME"},
        {text: "Marshall Islands", value: "MH"},
        {text: "Maryland", value: "MD"},
        {text: "Massachusetts", value: "MA"},
        {text: "Michigan", value: "MI"},
        {text: "Micronesia, Federated States", value: "FM"},
        {text: "Minnesota", value: "MN"},
        {text: "Mississippi", value: "MS"},
        {text: "Missouri", value: "MO"},
        {text: "Montana", value: "MT"},
        {text: "Nebraska", value: "NE"},
        {text: "Nevada", value: "NV"},
        {text: "New Hampshire", value: "NH"},
        {text: "New Jersey", value: "NJ"},
        {text: "New Mexico", value: "NM"},
        {text: "New York", value: "NY"},
        {text: "North Carolina", value: "NC"},
        {text: "North Dakota", value: "ND"},
        {text: "Northern Mariana Islands", value: "MP"},
        {text: "Ohio", value: "OH"},
        {text: "Oklahoma", value: "OK"},
        {text: "Oregon", value: "OR"},
        {text: "Palau", value: "PW"},
        {text: "Pennsylvania", value: "PA"},
        {text: "Puerto Rico", value: "PR"},
        {text: "Rhode Island", value: "RI"},
        {text: "South Carolina", value: "SC"},
        {text: "South Dakota", value: "SD"},
        {text: "Tennessee", value: "TN"},
        {text: "Texas", value: "TX"},
        {text: "United States Minor Outlying Islands", value: "UM"},
        {text: "Utah", value: "UT"},
        {text: "Vermont", value: "VT"},
        {text: "Virgin Islands, U.S.", value: "VI"},
        {text: "Virginia", value: "VA"},
        {text: "Washington", value: "WA"},
        {text: "West Virginia", value: "WV"},
        {text: "Wisconsin", value: "WI"},
        {text: "Wyoming", value: "WY"}
      ],
      CA: [
        {text: "Alberta", value: "AB"},
        {text: "British Columbia", value: "BC"},
        {text: "Manitoba", value: "MB"},
        {text: "New Brunswick", value: "NB"},
        {text: "Newfoundland", value: "NF"},
        {text: "Newfoundland and Labrador", value: "NL"},
        {text: "Northwest Territories", value: "NT"},
        {text: "Nova Scotia", value: "NS"},
        {text: "Nunavut", value: "NU"},
        {text: "Ontario", value: "ON"},
        {text: "Prince Edward Island", value: "PE"},
        {text: "Quebec", value: "QC"},
        {text: "Saskatchewan", value: "SK"},
        {text: "Yukon", value: "YT"},
      ]
    }
    this.LData.markIcon = L.icon({
      iconUrl: '/assets/imgs/geoIcons/marker-icon.png',
      shadowUrl: '/assets/imgs/geoIcons/marker-shadow.png',
    });
  }

  getProvince(country) {
    return this.provinceData[country];
  }
  getCountry() {
    return this.countryData;
  }

  search(param, zoomSize) {
    this.httpS.get(this._vs.url.map.openStreetMapSearch, param).subscribe((data)=>{
      this.geoData = data&&data.length?data:this.defaultLocation;
      this.nullAddress = !!data.length;
      this.createMap('mapChart001', zoomSize);
    });
  }

  createMap(id, zoomSize) {
    if(!this.map) {
      this.map = L.map(id)
    }

    this.map.setView([parseFloat(this.geoData[0].lat), parseFloat(this.geoData[0].lon)], zoomSize);
    // go http://leaflet-extras.github.io/leaflet-providers/preview/index.html for more free tileLayer
    L.tileLayer(this._vs.url.map.tileLayer, {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    this.currentMapData.bounds = this.map.getBounds();

    // listen to zoom event
    this.map.on('zoomend', (e)=>{
      this.mapZoomed(e);
    });

    let icon = this.geoData[0].icon?('<img src="' + this.geoData[0].icon + '" style="margin-top: -8px;">'):'i'

    this.addMark('div-icon-mark', icon, {
      background: 'rgb(6, 152, 251)',
      color: 'white',
      width: '28px',
      height: '28px',
      fontSize: '20px',
      'font-weight': 'bolder',
      borderRadius: '16px',
      padding: '0',
      textAlign: 'center',
    });
  }

  addMark(className, htmlContent, style) {
    // var marker = L.marker([this.geoData[0].lat, this.geoData[0].lon], {
    //   icon: this.LData.markIcon
    // }).addTo(this.map);
    let markContent = 
        "<style>" + 
            ".map-mark-title {color: #E8B334; font-size: 12px; margin-right: 10px;}" +
            ".map-mark-head-icon {padding-bottom: 10px; margin-right: 10px;}" +
        "</style>" +
        "<h4>" + (this.geoData[0].icon?("<img class='map-mark-head-icon' src='" + this.geoData[0].icon + "'>"):'') + "Info</h4>" +
        "<div>" +
            "<div>" +
                "<span class='map-mark-title'>ID:</span>" + 
                "<span>" + 
                    this.geoData[0].place_id + 
                "</span>" +
            "</div>" +
            "<div>" +
                "<span class='map-mark-title'>Location:</span>" + 
                "<span>" + 
                    this.geoData[0].display_name + 
                "</span>" +
            "</div>" +
            "<div>" +
                "<span class='map-mark-title'>Type:</span>" + 
                "<span>" + 
                    this.geoData[0].type + 
                "</span>" +
            "</div>" +
            "<div>" +
                "<span class='map-mark-title'>Position:</span>" + 
                "<span>" + 
                    "lat: " + this.geoData[0].lat + ", lon: " + this.geoData[0].lon + 
                "</span>" +
            "</div>" +
            "<div>" +
                "<span class='map-mark-title'>Importance:</span>" + 
                "<span>" + 
                    this.geoData[0].importance + 
                "</span>" +
            "</div>" +
        "</div>"

    var marker = L.marker([this.geoData[0].lat, this.geoData[0].lon], {
        icon: this.createIcon(className, htmlContent)
    }).addTo(this.map);
    Object.assign(marker.getElement().style, style);
    marker.bindPopup(markContent, {'maxWidth': '240'});
  }

  addPropertyCollectionMark(className, num) {
    // var marker = L.marker([this.geoData[0].lat, this.geoData[0].lon], {
    //   icon: this.LData.markIcon
    // }).addTo(this.map);
    num = parseInt(num);
    let size = num>=1000?'64px':num>=100?'48px':num>=10?'32px':'20px';

    let style = {
      background: 'rgb(6, 152, 251)',
      color: 'white',
      width: size,
      height: size,
      fontSize: '14px',
      borderRadius: num>=1000?'32px':num>=100?'24px':num>=10?'16px':'10px',
      padding: '6px 0',
      textAlign: 'center',
    }
    var marker = L.marker([this.geoData[0].lat, this.geoData[0].lon], {
        icon: this.createIcon(className, num)
    }).addTo(this.map);

    Object.assign(marker.getElement().style, style);
    marker.bindPopup("<b>Hello There!</b><br>This is a popup for displaying detail information.");
  }

  createIcon(className, htmlContent) {
    let icon = L.divIcon({
      className: className?className:'',
      html: htmlContent?htmlContent:''
    });
    return icon;
  }

  mapZoomed(e){
    this.currentMapData.bounds = this.map.getBounds();
    console.log(this.currentMapData.bounds)
    this.loadRealtorData();
  }

  loadRealtorData() {
    let param = {
        CultureId:'1',
        ApplicationId:'1',
        RecordsPerPage:'9',
        MaximumResults:'9',
        PropertySearchTypeId:'1',
        TransactionTypeId:'2',
        StoreyRange:'0-0',
        BedRange:'0-0',
        BathRange:'0-0',
        LongitudeMin: this.currentMapData.bounds._northEast.lng,
        LongitudeMax: this.currentMapData.bounds._southWest.lng,
        LatitudeMin: this.currentMapData.bounds._northEast.lat,
        LatitudeMax: this.currentMapData.bounds._southWest.lat,
        SortOrder:'A',
        SortBy:'1',
        viewState:'m',
        Longitude:'-123.113357543945',
        Latitude:'49.2603797912598',
        ZoomLevel:'12',
        CurrentPage:'1',
        PropertyTypeGroupID:'1',
        Token:'D6TmfZprLI/lh7oVUS6IVreKnxHCrNm8Zy58IYPCrkM=',
        GUID:'1c80f745-fc2f-4843-b206-dbe7212da3ec',
    }
    this.httpS.get(this._vs.url.map.realtorSearch, param).subscribe((data)=>{
      console.log('realtor data:', data)
    });
  }
}
