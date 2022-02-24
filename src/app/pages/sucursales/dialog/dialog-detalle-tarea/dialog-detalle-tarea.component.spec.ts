import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleTareaComponent } from './dialog-detalle-tarea.component';

describe('DialogDetalleTareaComponent', () => {
  let component: DialogDetalleTareaComponent;
  let fixture: ComponentFixture<DialogDetalleTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
