import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedControlsComponent } from './specialized-controls.component';

describe('SpecializedControlsComponent', () => {
  let component: SpecializedControlsComponent;
  let fixture: ComponentFixture<SpecializedControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializedControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializedControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
