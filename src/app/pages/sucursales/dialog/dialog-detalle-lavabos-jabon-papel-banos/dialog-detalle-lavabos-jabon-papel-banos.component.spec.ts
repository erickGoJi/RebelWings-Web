import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleLavabosJabonPapelBanosComponent } from './dialog-detalle-lavabos-jabon-papel-banos.component';

describe('DialogDetalleLavabosJabonPapelBanosComponent', () => {
  let component: DialogDetalleLavabosJabonPapelBanosComponent;
  let fixture: ComponentFixture<DialogDetalleLavabosJabonPapelBanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleLavabosJabonPapelBanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleLavabosJabonPapelBanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
