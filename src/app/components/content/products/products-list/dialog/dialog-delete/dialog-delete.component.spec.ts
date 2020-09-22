import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteComponent } from './dialog-delete.component';

describe('DialogDeleteComponent', () => {
  let component: DialogDeleteComponent;
  let fixture: ComponentFixture<DialogDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});