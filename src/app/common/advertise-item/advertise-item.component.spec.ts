import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseItemComponent } from './advertise-item.component';

describe('AdvertiseItemComponent', () => {
  let component: AdvertiseItemComponent;
  let fixture: ComponentFixture<AdvertiseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
