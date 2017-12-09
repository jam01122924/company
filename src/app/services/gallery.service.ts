import { Injectable } from '@angular/core';
import { data20170929 } from './localData/galleryData/2017-美西自驾游';

@Injectable()
export class GalleryService {
	private _state: any;
	private _data: any[];
	private _currentData: any;

	public currIndex: number;

  constructor() {
		this._state = {
			currentFolderIndex: 0,
			currentDateIndex: 0,
			currentViewIndex: 0,
		};

		this._data = [];
		//2017-美西自驾游
		this._data.push(data20170929);

		this._currentData = this._data[0].subFolder[0].subFolder[0];
		this.currIndex = 0;
	}

	selectData(selectArray) {
		this.currIndex = 0;
		if(selectArray.length&&selectArray.length===3) {
			this._state.currentFolderIndex = selectArray[0];
			this._state.currentDateIndex = selectArray[1];
			this._state.currentViewIndex = selectArray[2];

			let result = JSON.parse(JSON.stringify(this._data));
			selectArray.forEach((num)=>{
				if(result.length>num) {
					console.log('num')
					result = result[num];
				}else if(result.subFolder.length>num) {
					console.log('subfolder')
					result = result.subFolder[num];
					if(!result.subFolder) {
						this._currentData = result;
						console.log('end', this._currentData);
					}
				}else {
					console.log('error', this._currentData);
					return;
				}
			});
		}
	}

	get data(): any {
		return this._data;
	}
	get currentData(): any {
		return this._currentData;
	}
	get state(): any {
		return this._state;
	}
}
