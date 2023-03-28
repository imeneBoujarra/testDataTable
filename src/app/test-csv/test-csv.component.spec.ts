import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCsvComponent } from './test-csv.component';

describe('TestCsvComponent', () => {
  let component: TestCsvComponent;
  let fixture: ComponentFixture<TestCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
