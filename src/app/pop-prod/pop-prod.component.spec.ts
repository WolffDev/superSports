/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopProdComponent } from './pop-prod.component';

describe('PopProdComponent', () => {
  let component: PopProdComponent;
  let fixture: ComponentFixture<PopProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
