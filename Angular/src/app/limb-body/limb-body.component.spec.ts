import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimbBodyComponent } from './limb-body.component';

describe('LimbBodyComponent', () => {
  let component: LimbBodyComponent;
  let fixture: ComponentFixture<LimbBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimbBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimbBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
