import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimbMediaModalComponent } from './limb-media-modal.component';

describe('LimbMediaModalComponent', () => {
  let component: LimbMediaModalComponent;
  let fixture: ComponentFixture<LimbMediaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimbMediaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimbMediaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
