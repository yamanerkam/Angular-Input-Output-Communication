import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent11Component } from './parent11.component';

describe('Parent11Component', () => {
  let component: Parent11Component;
  let fixture: ComponentFixture<Parent11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent11Component]
    });
    fixture = TestBed.createComponent(Parent11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
