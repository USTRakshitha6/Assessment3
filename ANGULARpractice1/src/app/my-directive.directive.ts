import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor( public elementRef:ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'yellow';
    elementRef.nativeElement.style.color='red';
    elementRef.nativeElement.style.padding='60px';
    elementRef.nativeElement.style.marginTop='70px';
    elementRef.nativeElement.style.fontsize='50px';
   }
   @HostBinding('style.background') background: string;
   

   @HostListener('mouseenter')
   mouseEnter(){
     this.background = "skyblue";
    //  console.log('mouseenter')
    // alert('mouse entered');
    // this. elementRef.nativeElement.style.backgroundColor='red';
    // this.elementRef.nativeElement.style.backgroundColor='white';
    // this.elementRef.nativeElement.style.fontsize='40px';
   }
   @HostListener('mouseleave')
   mouseLeave(){
    this.background = "purple";
    //  console.log('mouseenter')
    // alert('mouse entered');
    // this.elementRef.nativeElement.style.backgroundColor='green';
    // this.elementRef.nativeElement.style.backgroundColor='red';
    // this.elementRef.nativeElement.style.fontsize='20px';
   }

}
