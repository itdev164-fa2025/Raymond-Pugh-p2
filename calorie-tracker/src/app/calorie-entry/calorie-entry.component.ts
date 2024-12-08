import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-calorie-entry',
  templateUrl: './calorie-entry.component.html',
  styleUrls: ['./calorie-entry.component.css'],
  standalone: true,  
  imports: [FormsModule]  
})
export class CalorieEntryComponent {
  foodName: string = '';
  calories: number = 0;

  onSubmit(): void {
    console.log('Food Name:', this.foodName);
    console.log('Calories:', this.calories);
  }
}
