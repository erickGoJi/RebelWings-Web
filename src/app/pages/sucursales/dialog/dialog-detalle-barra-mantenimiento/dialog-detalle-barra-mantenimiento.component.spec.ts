import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleBarraMantenimientoComponent } from './dialog-detalle-barra-mantenimiento.component';

describe('DialogDetalleBarraMantenimientoComponent', () => {
  let component: DialogDetalleBarraMantenimientoComponent;
  let fixture: ComponentFixture<DialogDetalleBarraMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleBarraMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleBarraMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
