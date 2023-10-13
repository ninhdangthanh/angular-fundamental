import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]',
})
export class MyHighlightDirective {

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }
}


@Directive({
  selector: '[myDirective]',
})
export class MyDirective {

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }
}
