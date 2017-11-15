import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService {
	private _state: any;
	private _data: any[];

  constructor() {
		this._state = {
			currentFolderIndex: 0,
			currentDateIndex: 0,
			currentViewIndex: 0,
			currentPhotoIndex: 0,
		};

		this._data = [
			{
				name: '2017-美西自驾游',
				des: 'test',
				subFolder: [
					{
						name: '2017-9-29',
						des: '2017-9-29',
						subFolder: [
							{
								name: '起点',
								des: 'where it all start...',
								photos: [
									{
										title: '入境美国',
										des: '刚刚入境美国，汉堡王快餐店外的枫叶收到初秋的消息不久',
										url: 'https://i.imgur.com/0a0ZnTv.jpg',
										type: 'w'
									},
									{
										title: '堵，在西雅图',
										des: '西雅图依旧一如既往的堵，我们还遇到了上下班高峰',
										url: 'https://i.imgur.com/qTwuvXc.jpg',
										type: 'w'
									},
									{
										title: 'test3',
										des: 'test3',
										url: 'https://i.imgur.com/0a0ZnTv.jpg',
										type: 'w'
									},
								]
							},
							{
								name: '西雅图',
								des: 'test',
								photos: [
									{
										title: 'test',
										des: 'test',
										url: 'aaa.jpg'
									},
								]
							},
							{
								name: '奥林匹亚',
								des: 'test',
								photos: [
									{
										title: 'test',
										des: 'test',
										url: 'aaa.jpg'
									},
								]
							},
							{
								name: '美西1号公路',
								des: 'test',
								photos: [
									{
										title: 'test',
										des: 'test',
										url: 'aaa.jpg'
									},
								]
							},
						]
					}
				]
			},
		];

	}

	get data(): any {
		return this._data;
	}

	get state(): any {
		return this._state;
	}
}
