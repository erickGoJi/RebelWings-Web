import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleTicketMesaSistemaComponent } from './dialog-detalle-ticket-mesa-sistema.component';

describe('DialogDetalleTicketMesaSistemaComponent', () => {
  let component: DialogDetalleTicketMesaSistemaComponent;
  let fixture: ComponentFixture<DialogDetalleTicketMesaSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleTicketMesaSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleTicketMesaSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
