import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productItemList: any[];
  selectedProduct: number;
  constructor() { }

  ngOnInit() {
    this.productItemList = [
      {
        name: 'Map',
        icon: 'fa-map-o'
      },
      {
        name: 'Charts',
        icon: 'fa-bar-chart'
      },
      {
        name: '3D',
        icon: 'fa-cube'
      },
      {
        name: 'Websites',
        icon: 'fa-chrome'
      },
    ];
    this.selectedProduct = 0;
  }
}
