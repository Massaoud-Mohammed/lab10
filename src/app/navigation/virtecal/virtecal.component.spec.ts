/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VirtecalComponent } from './virtecal.component';

describe('VirtecalComponent', () => {
  let component: VirtecalComponent;
  let fixture: ComponentFixture<VirtecalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtecalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtecalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
