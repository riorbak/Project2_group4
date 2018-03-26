import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLimbComponent } from './edit-limb.component';

describe('EditLimbComponent', () => {
  let component: EditLimbComponent;
  let fixture: ComponentFixture<EditLimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
