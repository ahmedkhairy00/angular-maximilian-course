import { Component ,input, ViewEncapsulation , inject, ElementRef} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class : 'control',
    '(click)': 'hostClick()'

  } 
})
export class Control {
/* @HostBinding('class') className = 'control';*/ 
 label = input<string | undefined>();
 private el = inject(ElementRef);
 hostClick(){
 console.log('Host Element Clicked!');
 console.log(this.el);
 console.log(this.el.nativeElement.localName);
 }
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

// Component Host Elements 
/* 
Every Angular Component Has a => Host Element

Exe :- A component with Selector of "app-header" targets an
<app-header> element which is renderd into the real DOM

! Important : The elements targeted by your component selectors do Not act
as placeholder and are Not replaced when the page is rendered !

Instead, the selected elements are preserved and simply 
"enhanced" / taken over by your componenet logic & markup!

Note :- :host dont Working with in component Encapsulation that Make ViewEncapsulation.None

Because : - ViewEncapsulation.None => Mean its Style Will also will defecat outside Component Element
          :host => Mean Applay This Style To That Component Only that app-select

*/

// Angular Give host Property , That We Use  it in component ts
/* 
That Will applay in this component in every where

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class : 'control'

  }
})

// That Mean app-control Component will always have class control
and its style will applied in this component


Note :- When Not To Rely In Host element

// and HostBinding and HostListener are more powerful than host property because they allow us to bind dynamic values to host element and listen to host element events
// Use HostBinding When You Need To Bind Dynamic Values To Host Element
 @HostBinding('class') className = 'control';
// Use HostListener When You Need To Listen To Host Element Events

// and we can add event in host object Component Docreder and releated it with function

// its also do Same thing that HostListener but its more clean and easy to read and maintain
 @HostListener('click') hostClick(){
 console.log('Host Element Clicked!');
 }
*/

// Accessing Host Elements Programmatically In Component Logic
/* 
By Injecting ElementRef In Component Logic We Can Access Host Element Programmatically And Do Whatever We Want With It

private el = inject(ElementRef);
 hostClick(){
 console.log(this.el);
 }

*/