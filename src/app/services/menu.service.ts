import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
	expend: boolean = false;

  constructor() {}
  trigger() {
		this.expend = !this.expend;
  }
}
