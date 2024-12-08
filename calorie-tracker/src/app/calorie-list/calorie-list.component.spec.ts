import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieListComponent } from './calorie-list.component';

describe('CalorieListComponent', () => {
  let component: CalorieListComponent;
  let fixture: ComponentFixture<CalorieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalorieListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
