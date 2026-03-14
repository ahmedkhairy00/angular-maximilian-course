import { Component, signal } from '@angular/core';
import { Header } from './Components/header/header';
import { UserInputs } from './Components/user-inputs/user-inputs';
import { InvestmentsResults } from './Components/investments-results/investments-results';

@Component({
  selector: 'app-root',
  imports: [Header, UserInputs,InvestmentsResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('investmentApp');
  isSubmited = signal<boolean>(true);
  
  formSubmited(isSubmited: boolean){
    this.isSubmited.update(() => isSubmited);
    console.log(this.isSubmited());
  }
}
