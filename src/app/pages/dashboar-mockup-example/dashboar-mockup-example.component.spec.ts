import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarMockupExampleComponent } from './dashboar-mockup-example.component';

describe('DashboarMockupExampleComponent', () => {
  let component: DashboarMockupExampleComponent;
  let fixture: ComponentFixture<DashboarMockupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarMockupExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarMockupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
