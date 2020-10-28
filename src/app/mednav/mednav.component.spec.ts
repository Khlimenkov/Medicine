import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MednavComponent } from './mednav.component';

describe('MednavComponent', () => {
  let component: MednavComponent;
  let fixture: ComponentFixture<MednavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MednavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MednavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
