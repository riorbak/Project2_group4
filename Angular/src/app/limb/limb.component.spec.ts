import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimbComponent } from './limb.component';

describe('LimbComponent', () => {
  let component: LimbComponent;
  let fixture: ComponentFixture<LimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
