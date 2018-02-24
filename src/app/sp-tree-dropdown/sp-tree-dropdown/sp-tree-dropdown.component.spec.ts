import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpTreeDropdownComponent } from './sp-tree-dropdown.component';

describe('SpTreeDropdownComponent', () => {
  let component: SpTreeDropdownComponent;
  let fixture: ComponentFixture<SpTreeDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpTreeDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpTreeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
