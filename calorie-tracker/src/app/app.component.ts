import { Component } from '@angular/core';
import { CalorieEntryComponent } from './calorie-entry/calorie-entry.component';  // Import your component

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CalorieEntryComponent] 
})
export class AppComponent {
  title = 'calorie-tracker';
}
