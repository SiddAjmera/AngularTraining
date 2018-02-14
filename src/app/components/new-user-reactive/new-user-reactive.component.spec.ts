import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserReactiveComponent } from './new-user-reactive.component';

describe('NewUserReactiveComponent', () => {
  let component: NewUserReactiveComponent;
  let fixture: ComponentFixture<NewUserReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
