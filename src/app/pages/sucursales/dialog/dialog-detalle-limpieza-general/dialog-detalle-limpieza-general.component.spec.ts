import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleLimpiezaGeneralComponent } from './dialog-detalle-limpieza-general.component';

describe('DialogDetalleLimpiezaGeneralComponent', () => {
  let component: DialogDetalleLimpiezaGeneralComponent;
  let fixture: ComponentFixture<DialogDetalleLimpiezaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleLimpiezaGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleLimpiezaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
