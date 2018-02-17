import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpSelectComponent } from './sp-select.component';

describe('SpSelectComponent', () => {
  let component: SpSelectComponent;
  let fixture: ComponentFixture<SpSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
