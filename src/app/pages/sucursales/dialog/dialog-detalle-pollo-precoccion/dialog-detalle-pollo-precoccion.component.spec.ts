import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetallePolloPrecoccionComponent } from './dialog-detalle-pollo-precoccion.component';

describe('DialogDetallePolloPrecoccionComponent', () => {
  let component: DialogDetallePolloPrecoccionComponent;
  let fixture: ComponentFixture<DialogDetallePolloPrecoccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetallePolloPrecoccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetallePolloPrecoccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
