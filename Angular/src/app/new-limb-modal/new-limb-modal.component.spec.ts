import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLimbModalComponent } from './new-limb-modal.component';

describe('NewLimbModalComponent', () => {
  let component: NewLimbModalComponent;
  let fixture: ComponentFixture<NewLimbModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLimbModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLimbModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
