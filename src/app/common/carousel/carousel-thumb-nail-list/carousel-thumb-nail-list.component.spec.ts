import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselThumbNailListComponent } from './carousel-thumb-nail-list.component';

describe('CarouselThumbNailListComponent', () => {
  let component: CarouselThumbNailListComponent;
  let fixture: ComponentFixture<CarouselThumbNailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselThumbNailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselThumbNailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
