import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../Services/investment.service';


@Component({
  selector: 'app-user-inputs',
  imports: [FormsModule],
  templateUrl: './user-inputs.html',
  styleUrl: './user-inputs.css',
  standalone: true,
})
export class UserInputs { 

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  isSubmited = output<boolean>();

  investmentService = inject(InvestmentService);

 
  onSubmit(){
    this.isSubmited.emit(false);

    /* Update Signals Values in Service to use in investments components */
    this.investmentService.updateInitialInvestment(Number(this.initialInvestment()));
    this.investmentService.updateAnnualInvestment(Number(this.annualInvestment()));
    this.investmentService.updateExpectedReturn(Number(this.expectedReturn()));
    this.investmentService.updateDuration(Number(this.duration()));


    // call method calcluate errning
    this.investmentService.calculateInvestmentResults();
    
    /* reset fields */
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');

  }


}

/* Debugging Angular Apps */
/* 
1 - If There Error in Angular App The Error Return Component that have the error and the line that have exactly error

2 - There Dubgger In Browser We Select line to make Code Start With , to See Value Sends or Not and We 
 Make Start and also there button for next line to observe the value or data the throw component from method to other 
 untill we know where the problrm is and solve it 

 3 - There Angular Extention in Browser to know Angular Components and Signal Value and if we change it what expecated value
 and can Observer everything in Angular Components and its state . 

*/