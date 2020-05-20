/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FluxActivitéComponent } from './flux-activité.component';

describe('FluxActivitéComponent', () => {
  let component: FluxActivitéComponent;
  let fixture: ComponentFixture<FluxActivitéComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxActivitéComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxActivitéComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
