import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../../Services/investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investments-results',
  imports: [CurrencyPipe],
  templateUrl: './investments-results.html',
  styleUrl: './investments-results.css',
})
export class InvestmentsResults {

  investmentsService : any = inject(InvestmentService);

  results = this.investmentsService.annualData.asReadonly();
    

  // asReadonly() is used to make the results read-only
  // This means that the results can be read but not modified
  // This is a good practice for performance and security

}
