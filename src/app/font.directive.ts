import { Directive,ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appFont]'

})
eexport class FontDirective {


  constructor(private elem:ElementRef) { }

  

  @HostListener("mouseenter") onmouseenter(){
    this.fontChange('Caveat')
  }