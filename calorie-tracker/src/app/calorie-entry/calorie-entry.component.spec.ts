import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieEntryComponent } from './calorie-entry.component';

describe('CalorieEntryComponent', () => {
  let component: CalorieEntryComponent;
  let fixture: ComponentFixture<CalorieEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalorieEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorieEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
