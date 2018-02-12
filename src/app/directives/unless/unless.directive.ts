import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set appUnless(condition) {
    condition ? this.viewContainerRef.clear()
              : this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
