import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArrayComponent } from './select-array.component';

describe('SelectArrayComponent', () => {
  let component: SelectArrayComponent;
  let fixture: ComponentFixture<SelectArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
