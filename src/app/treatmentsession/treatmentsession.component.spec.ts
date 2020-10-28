import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsessionComponent } from './treatmentsession.component';

describe('TreatmentsessionComponent', () => {
  let component: TreatmentsessionComponent;
  let fixture: ComponentFixture<TreatmentsessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentsessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
