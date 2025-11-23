import { 
  Component, 
  input 
} from '@angular/core';

@Component({
  templateUrl: './YearToDays.html',
  styleUrl: './YearToDays.css',
  selector: 'year-to-days'
})
export class YearToDays {
  ageInput = input<number>()
  currentAge = this.ageInput() || 0

  ageUpClick(){
    this.currentAge += 1;
  }
  ageDownClick(){
    this.currentAge -= 1;

    if (this.currentAge < 0){

      this.currentAge = 0
    }
  }
}