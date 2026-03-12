import { Component, signal } from '@angular/core';
import { Header } from './Components/header/header';
import { UserInputs } from './Components/user-inputs/user-inputs';

@Component({
  selector: 'app-root',
  imports: [Header, UserInputs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('investmentApp');
  isSubmited = signal<boolean>(false);
  submitedForm(){
    this.isSubmited.update(e => e = true)
    console.log(this.isSubmited);
  }
}
