import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  @Input('appChangeCase') expectedCase: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('blur') onBlur() {
    // this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    let changedValue = this.expectedCase === 'upper' ? this.el.nativeElement.value.toUpperCase()
                                             : this.el.nativeElement.value.toLowerCase();
    this.renderer.setProperty(this.el.nativeElement, 'value', changedValue);
  }

}
