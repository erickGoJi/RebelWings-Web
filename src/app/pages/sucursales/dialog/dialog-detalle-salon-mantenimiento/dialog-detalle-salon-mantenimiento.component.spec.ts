import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleSalonMantenimientoComponent } from './dialog-detalle-salon-mantenimiento.component';

describe('DialogDetalleSalonMantenimientoComponent', () => {
  let component: DialogDetalleSalonMantenimientoComponent;
  let fixture: ComponentFixture<DialogDetalleSalonMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleSalonMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleSalonMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
