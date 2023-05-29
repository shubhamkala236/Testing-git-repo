import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChild1Component } from './header-child1.component';

describe('HeaderChild1Component', () => {
  let component: HeaderChild1Component;
  let fixture: ComponentFixture<HeaderChild1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderChild1Component]
    });
    fixture = TestBed.createComponent(HeaderChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
