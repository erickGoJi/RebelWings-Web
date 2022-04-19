import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleMesaEsperaComponent } from './dialog-detalle-mesa-espera.component';

describe('DialogDetalleMesaEsperaComponent', () => {
  let component: DialogDetalleMesaEsperaComponent;
  let fixture: ComponentFixture<DialogDetalleMesaEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleMesaEsperaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleMesaEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
