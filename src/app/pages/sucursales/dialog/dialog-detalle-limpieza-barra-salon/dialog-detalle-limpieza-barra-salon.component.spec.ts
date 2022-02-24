import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleLimpiezaBarraSalonComponent } from './dialog-detalle-limpieza-barra-salon.component';

describe('DialogDetalleLimpiezaBarraSalonComponent', () => {
  let component: DialogDetalleLimpiezaBarraSalonComponent;
  let fixture: ComponentFixture<DialogDetalleLimpiezaBarraSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleLimpiezaBarraSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleLimpiezaBarraSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
