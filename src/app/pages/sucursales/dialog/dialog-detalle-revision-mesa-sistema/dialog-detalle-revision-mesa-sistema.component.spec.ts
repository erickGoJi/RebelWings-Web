import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleRevisionMesaSistemaComponent } from './dialog-detalle-revision-mesa-sistema.component';

describe('DialogDetalleRevisionMesaSistemaComponent', () => {
  let component: DialogDetalleRevisionMesaSistemaComponent;
  let fixture: ComponentFixture<DialogDetalleRevisionMesaSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleRevisionMesaSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleRevisionMesaSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
