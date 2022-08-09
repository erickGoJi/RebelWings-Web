import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVoladoEfectivoComponent } from './dialog-volado-efectivo.component';

describe('DialogVoladoEfectivoComponent', () => {
  let component: DialogVoladoEfectivoComponent;
  let fixture: ComponentFixture<DialogVoladoEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVoladoEfectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVoladoEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
