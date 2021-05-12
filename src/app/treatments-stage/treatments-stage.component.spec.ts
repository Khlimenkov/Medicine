import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsStageComponent } from './treatments-stage.component';

describe('TreatmentsStageComponent', () => {
  let component: TreatmentsStageComponent;
  let fixture: ComponentFixture<TreatmentsStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentsStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentsStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
