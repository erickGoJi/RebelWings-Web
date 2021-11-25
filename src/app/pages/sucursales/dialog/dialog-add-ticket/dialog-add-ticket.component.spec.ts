import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddTicketComponent } from './dialog-add-ticket.component';

describe('DialogAddTicketComponent', () => {
  let component: DialogAddTicketComponent;
  let fixture: ComponentFixture<DialogAddTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
