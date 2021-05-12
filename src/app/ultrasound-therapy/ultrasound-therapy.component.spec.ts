import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasoundTherapyComponent } from './ultrasound-therapy.component';

describe('UltrasoundTherapyComponent', () => {
  let component: UltrasoundTherapyComponent;
  let fixture: ComponentFixture<UltrasoundTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltrasoundTherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrasoundTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
