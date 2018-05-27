import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFeatureComponent } from './animation-feature.component';

describe('AnimationFeatureComponent', () => {
  let component: AnimationFeatureComponent;
  let fixture: ComponentFixture<AnimationFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
