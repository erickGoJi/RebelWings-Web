import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleProductoRiesgoComponent } from './dialog-detalle-producto-riesgo.component';

describe('DialogDetalleProductoRiesgoComponent', () => {
  let component: DialogDetalleProductoRiesgoComponent;
  let fixture: ComponentFixture<DialogDetalleProductoRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleProductoRiesgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleProductoRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
