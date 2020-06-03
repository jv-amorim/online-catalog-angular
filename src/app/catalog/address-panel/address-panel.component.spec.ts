import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPanelComponent } from './address-panel.component';

describe('AddressPanelComponent', () => {
  let component: AddressPanelComponent;
  let fixture: ComponentFixture<AddressPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
