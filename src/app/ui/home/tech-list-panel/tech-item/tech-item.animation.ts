import { trigger, state, style, transition, animate } from '@angular/core';

let verticalArray = [];

for(let i=1; i<300; i++) {
	verticalArray.push(state(i.toString(), style({
		transform: 'translateY(' + i + '%)',
	})));
}

export const verticalMove = trigger('verticalMove', [
	...verticalArray,
	transition('* => *', animate('600ms ease-in'))
]);