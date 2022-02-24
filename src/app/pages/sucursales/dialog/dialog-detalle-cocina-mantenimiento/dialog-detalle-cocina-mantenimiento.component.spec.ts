import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleCocinaMantenimientoComponent } from './dialog-detalle-cocina-mantenimiento.component';

describe('DialogDetalleCocinaMantenimientoComponent', () => {
  let component: DialogDetalleCocinaMantenimientoComponent;
  let fixture: ComponentFixture<DialogDetalleCocinaMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleCocinaMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleCocinaMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
