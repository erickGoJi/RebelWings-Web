import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleEntradasAlbaranSistemaComponent } from './dialog-detalle-entradas-albaran-sistema.component';

describe('DialogDetalleEntradasAlbaranSistemaComponent', () => {
  let component: DialogDetalleEntradasAlbaranSistemaComponent;
  let fixture: ComponentFixture<DialogDetalleEntradasAlbaranSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleEntradasAlbaranSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleEntradasAlbaranSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
