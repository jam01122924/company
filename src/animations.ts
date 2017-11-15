import {animation, style, animate} from "@angular/animations";

export var fadeAnimation = animation([
  style({ opacity: "{{ from }}" }),
  animate("{{ time }}", style({ opacity: "{{ to }}" }))
], {params: {time: "1s"}});

export var slideAnimation = animation([
  animate("{{ time }}", style({ left: "{{ left }}" }))
], {params: {time: "1s"}});
