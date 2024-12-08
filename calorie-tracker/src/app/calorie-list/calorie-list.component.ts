import { Component } from '@angular/core';

@Component({
  selector: 'app-calorie-list',
  templateUrl: './calorie-list.component.html',
  styleUrls: ['./calorie-list.component.css'],
  standalone: true  // Mark as standalone
})
export class CalorieListComponent {
  calorieEntries = [
    { foodName: 'Apple', calories: 95 },
    { foodName: 'Banana', calories: 105 }
  ];
}
