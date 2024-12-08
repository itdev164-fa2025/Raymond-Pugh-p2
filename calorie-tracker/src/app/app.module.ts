import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CalorieEntryComponent } from './calorie-entry/calorie-entry.component'; // Import your component

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    CalorieEntryComponent  
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
