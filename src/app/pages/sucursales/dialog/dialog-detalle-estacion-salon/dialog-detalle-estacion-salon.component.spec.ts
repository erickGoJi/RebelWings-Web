import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleEstacionSalonComponent } from './dialog-detalle-estacion-salon.component';

describe('DialogDetalleEstacionSalonComponent', () => {
  let component: DialogDetalleEstacionSalonComponent;
  let fixture: ComponentFixture<DialogDetalleEstacionSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleEstacionSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleEstacionSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
