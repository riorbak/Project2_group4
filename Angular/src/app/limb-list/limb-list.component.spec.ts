import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimbListComponent } from './limb-list.component';

describe('LimbListComponent', () => {
  let component: LimbListComponent;
  let fixture: ComponentFixture<LimbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
