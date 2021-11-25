import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddStockPolloComponent } from './dialog-add-stock-pollo.component';

describe('DialogAddStockPolloComponent', () => {
  let component: DialogAddStockPolloComponent;
  let fixture: ComponentFixture<DialogAddStockPolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddStockPolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddStockPolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
