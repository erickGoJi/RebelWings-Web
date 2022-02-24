import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleEncuestaComponent } from './dialog-detalle-encuesta.component';

describe('DialogDetalleEncuestaComponent', () => {
  let component: DialogDetalleEncuestaComponent;
  let fixture: ComponentFixture<DialogDetalleEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
