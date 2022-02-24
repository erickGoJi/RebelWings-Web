import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleTemperaturaBebidasSalonComponent } from './dialog-detalle-temperatura-bebidas-salon.component';

describe('DialogDetalleTemperaturaBebidasSalonComponent', () => {
  let component: DialogDetalleTemperaturaBebidasSalonComponent;
  let fixture: ComponentFixture<DialogDetalleTemperaturaBebidasSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleTemperaturaBebidasSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleTemperaturaBebidasSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
