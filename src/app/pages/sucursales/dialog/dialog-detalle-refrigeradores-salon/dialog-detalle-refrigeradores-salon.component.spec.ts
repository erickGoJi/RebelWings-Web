import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleRefrigeradoresSalonComponent } from './dialog-detalle-refrigeradores-salon.component';

describe('DialogDetalleRefrigeradoresSalonComponent', () => {
  let component: DialogDetalleRefrigeradoresSalonComponent;
  let fixture: ComponentFixture<DialogDetalleRefrigeradoresSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleRefrigeradoresSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleRefrigeradoresSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
