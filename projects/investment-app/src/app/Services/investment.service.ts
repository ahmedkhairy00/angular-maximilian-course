import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  
  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(0);
  duration = signal<number>(0);
     annualData =signal<any[]>([]);


  // Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

 calculateInvestmentResults() {

    this.annualData.set([]);

  let investmentValue = this.initialInvestment();

  for (let i = 0; i < this.duration(); i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (this.expectedReturn() / 100);
    investmentValue += interestEarnedInYear + this.annualInvestment();
    const totalInterest =
      investmentValue - this.annualInvestment() * year - this.initialInvestment();
    this.annualData.update((data) =>  [...data, { 
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: this.annualInvestment(),
      totalInterest: totalInterest,
      totalAmountInvested: this.initialInvestment() + this.annualInvestment() * year,
    }]);
  }

  return this.annualData();
}

updateInitialInvestment(value: number){
  this.initialInvestment.update(() => value);
}

updateAnnualInvestment(value: number){
  this.annualInvestment.update(() => value);
}

updateExpectedReturn(value: number){
  this.expectedReturn.set(value);
}

updateDuration(value: number){
  this.duration.set(value);
}
}

/* Where Split Up Components */
/* 

1 - Use Sepreation of Concerns and its one of SOLID Principles
                             vs
2 - Simplicity & Code Colocation (Keep Related Code Together)   

3 - and Its Depends on the Project Size and Complexity

4 -  There No Clear Right and Wrong It Depend On Programmer Preferences
or guide lines  of the team you Are Working In and Complexity of the project you work on




*/