import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild } from '@angular/core';
// import * as THREE from 'three';


@Component({
  selector: 'app-3d-demo',
  templateUrl: './3d-demo.component.html',
  styleUrls: ['./3d-demo.component.css']
})

export class ThreedDemoComponent implements OnInit {
  // private scene: THREE.Scene;               // Scene
  // private camera: THREE.PerspectiveCamera;  // Camera
  // private cameraTarget: THREE.Vector3;      // Camera target
  // private dae: any;                         // graphic
  // private loader: any;                      // loader
  // private height: number;
  // private width: number;
  //
  // /* RENDERING PROPERTIES */
  // private get canvas(): HTMLCanvasElement {
  //   return this.canvasRef.nativeElement;
  // }
  //
  // @ViewChild('canvas')
  // private canvasRef: ElementRef;
  // private renderer: THREE.WebGLRenderer;

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    // this.height = window.innerHeight;
    // this.width = window.innerWidth;
    // this.scene = new THREE.Scene();
    // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 50);
    // this.camera.position.set(0, 0, 0);
    // this.renderer = new THREE.WebGLRenderer({
    //   alpha: true // remove canvas' bg color
    // });
    // this.renderer.setSize(this.width, this.height); // Make scene renderer the size of the screen
    // this.loader = new THREE.ColladaLoader();
    // document.body.appendChild( this.renderer.domElement );

  }
  //
  // ngAfterViewInit() {
  //   console.log(this.renderer.domElement)
  //   var d1 = this.elementRef.nativeElement.querySelector('.demo-canvas');
  //   d1.insertAdjacentHTML('beforeend', this.renderer.domElement);
  // }
  //
  // loadCollada( collada ) {
  //   this.dae = collada.scene;
  //   this.scene.add(this.dae);
  // }
  //
  // @HostListener('window:resize')
  // @HostListener('window:vrdisplaypresentchange')
  // resetWidthHeight() {
  //   this.height = window.innerHeight;
  //   this.width = window.innerWidth;
  //   console.log('window resize', this.height, this.width);
  // }

}
