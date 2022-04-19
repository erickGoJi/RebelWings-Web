import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPolloComponent } from './stock-pollo.component';

describe('StockPolloComponent', () => {
  let component: StockPolloComponent;
  let fixture: ComponentFixture<StockPolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
