import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselThumbNailComponent } from './carousel-thumb-nail.component';

describe('CarouselThumbNailComponent', () => {
  let component: CarouselThumbNailComponent;
  let fixture: ComponentFixture<CarouselThumbNailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselThumbNailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselThumbNailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
