import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleConteoPersonasComponent } from './dialog-detalle-conteo-personas.component';

describe('DialogDetalleConteoPersonasComponent', () => {
  let component: DialogDetalleConteoPersonasComponent;
  let fixture: ComponentFixture<DialogDetalleConteoPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleConteoPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleConteoPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
