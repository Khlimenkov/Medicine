import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentstagesComponent } from './treatmentstages.component';

describe('TreatmentstagesComponent', () => {
  let component: TreatmentstagesComponent;
  let fixture: ComponentFixture<TreatmentstagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentstagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentstagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
