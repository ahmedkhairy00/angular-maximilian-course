import { Component ,input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
})
export class Control {

  label = input<string | undefined>();
}


// Can we use ng-content to render any type of input ?
// Yes we can use it like this by use select attribute in ng-content and pass the type of input we want to render and divide it by comma

/* 
<ng-content select="input , textarea , select , button" />
*/

// ViewEncapsulation IS Enum typescript that contain 3 values
/* 
enum ViewEncapsulation {
  None,
  ShadowDom,
  Emulated,
}

*/

/* encapsulation: ViewEncapsulation.None, */
// this will make the component styles global and not encapsulated in the component

/* encapsulation: ViewEncapsulation.ShadowDom, */
// this will make the component styles encapsulated in the component and not global

/* encapsulation: ViewEncapsulation.Emulated, */
// this will make the component styles encapsulated in the component and not global
// this is the default encapsulation