import { Component ,input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  standalone: true,
})
export class Button {

  title = input.required<string>();
  icon = input.required<string>();
}


// But Now It redundent content because in dom appear <app-button> and enter it main <button> that will render in UI
// like this image
/* 
<app-button type="submit" title="Submit" icon="🚀" />

<button type="submit">
  <span> Submit </span>
  <span class="icon"> 🚀 </span>
</button>
*/

// To solve this we can use Attribute Selector that will added to any button will applay this component button
/* 
Selectot Attirbute in component   selector: 'button[appButton]',

and we dont make in html new button but only attirbute that will change in diffrent buttons
<span> {{ title() }} </span>
<span class="icon"> {{ icon() }} </span>

and we use it like this
/* 
<button appButton type="submit" title="Submit" icon="🚀"></button>
<button appButton type="button" title="Logout" icon="→"></button>
*/

/* 
And Also There Way to pass button name and icon , by use <ng-content>
<span>
 <ng-content />
 </span>
<span class="icon"> 
<ng-content />
</span>

and we use it like this
/* 
<button appButton type="submit">
  Submit  🚀 
</button>
*/

// But Its Problem Angular dont want what must render in specific <ng-content>

/* 
But We Can Solve This By Using Select Attribute in <ng-content> and can use it like this

<span>
 <ng-content />
 </span>
<ng-content select=".icon" />

and when we use it be like this
<button appButton>
  Submit 
  <span class="icon"> 🚀 </span>
</button>
*/

/* Advanced Content Projection By Use ngProjectAs */

/* 

Will Component
<span>
 <ng-content />
 </span>
<ng-content select=".icon" />

// and Use it Like this

<button appButton>
  Submit 
  <span ngProjectAs="icon"> 🚀 </span>
</button>

*/

// Defining Content Projection Fallbacks

/* 
<span>
<ng-content />
</span>

<span class="icon">
<ng-content>
   🚲
</ng-content>
</span>


*/


// Each Component Hast :host Selector 
/* 
host element => Is Simply That Selected By Component Selector
That We Cans Style it in css
:host{
color : red;
background : White;
}

*/