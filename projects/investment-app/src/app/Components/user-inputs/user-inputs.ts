import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-inputs',
  imports: [FormsModule],
  templateUrl: './user-inputs.html',
  styleUrl: './user-inputs.css',
  standalone: true,
})
export class UserInputs { 

  initialInvestment = signal('');
  annualInvestment = signal('');
  expectedReturn = signal('');
  duration = signal('');

  onSubmit(){
    console.log(this.initialInvestment(), this.annualInvestment(), this.expectedReturn(), this.duration());
  }


}
