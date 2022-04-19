import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleEstadoGeneralBanosComponent } from './dialog-detalle-estado-general-banos.component';

describe('DialogDetalleEstadoGeneralBanosComponent', () => {
  let component: DialogDetalleEstadoGeneralBanosComponent;
  let fixture: ComponentFixture<DialogDetalleEstadoGeneralBanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleEstadoGeneralBanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleEstadoGeneralBanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
