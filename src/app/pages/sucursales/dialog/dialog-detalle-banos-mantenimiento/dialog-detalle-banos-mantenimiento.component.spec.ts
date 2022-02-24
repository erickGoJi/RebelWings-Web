import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleBanosMantenimientoComponent } from './dialog-detalle-banos-mantenimiento.component';

describe('DialogDetalleBanosMantenimientoComponent', () => {
  let component: DialogDetalleBanosMantenimientoComponent;
  let fixture: ComponentFixture<DialogDetalleBanosMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleBanosMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleBanosMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
