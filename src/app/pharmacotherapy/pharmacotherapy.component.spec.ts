import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacotherapyComponent } from './pharmacotherapy.component';

describe('PharmacotherapyComponent', () => {
  let component: PharmacotherapyComponent;
  let fixture: ComponentFixture<PharmacotherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacotherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
