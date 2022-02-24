import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleFocosSalonComponent } from './dialog-detalle-focos-salon.component';

describe('DialogDetalleFocosSalonComponent', () => {
  let component: DialogDetalleFocosSalonComponent;
  let fixture: ComponentFixture<DialogDetalleFocosSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleFocosSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleFocosSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
