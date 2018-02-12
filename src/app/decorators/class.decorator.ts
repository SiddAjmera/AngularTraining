export function Sticker(configuration) {
  return function(target) {
    target.prototype.stickers = configuration.stickers;
  }
}

export function HookLogger(configuration?) {
  return function(target) {
    const defaultHooks: string[] = [
      'ngOnChanges',
      'ngOnInit',
      'ngDoCheck',
      'ngAfterContentInit',
      'ngAfterContentChecked',
      'ngAfterViewInit',
      'ngAfterViewChecked',
      'ngOnDestroy'
    ];

    let hooksToLogFor: any = (configuration && configuration.hooks) || defaultHooks;
    const componentName: string = target.name;
    
    hooksToLogFor.forEach(hookToLogFor => {
      const original = target.prototype[hookToLogFor];

      target.prototype[hookToLogFor] = function(...args) {
        console.log(`Component Name: ${componentName} | Hook Name: ${hookToLogFor} |`, ...args);
        original && original.apply(this, args);
      }
    });

  }
}