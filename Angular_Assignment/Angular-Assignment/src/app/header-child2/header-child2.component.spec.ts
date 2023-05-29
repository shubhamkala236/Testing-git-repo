import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChild2Component } from './header-child2.component';

describe('HeaderChild2Component', () => {
  let component: HeaderChild2Component;
  let fixture: ComponentFixture<HeaderChild2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderChild2Component]
    });
    fixture = TestBed.createComponent(HeaderChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
