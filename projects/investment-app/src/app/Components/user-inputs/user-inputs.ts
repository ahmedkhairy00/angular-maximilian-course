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
