import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvWithComaComponent } from './csv-with-coma.component';

describe('CsvWithComaComponent', () => {
  let component: CsvWithComaComponent;
  let fixture: ComponentFixture<CsvWithComaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvWithComaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvWithComaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
