import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleStockPolloComponent } from './dialog-detalle-stock-pollo.component';

describe('DialogDetalleStockPolloComponent', () => {
  let component: DialogDetalleStockPolloComponent;
  let fixture: ComponentFixture<DialogDetalleStockPolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleStockPolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleStockPolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
