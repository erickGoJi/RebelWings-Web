import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardSupervisorComponent } from './dasboard-supervisor.component';

describe('DasboardSupervisorComponent', () => {
  let component: DasboardSupervisorComponent;
  let fixture: ComponentFixture<DasboardSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
