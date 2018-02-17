import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpMultiSelectDropdownComponent } from './sp-multi-select-dropdown.component';

describe('SpMultiSelectDropdownComponent', () => {
  let component: SpMultiSelectDropdownComponent;
  let fixture: ComponentFixture<SpMultiSelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpMultiSelectDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpMultiSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
