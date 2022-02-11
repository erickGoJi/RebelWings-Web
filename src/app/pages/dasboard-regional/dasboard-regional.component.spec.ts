import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardRegionalComponent } from './dasboard-regional.component';

describe('DasboardRegionalComponent', () => {
  let component: DasboardRegionalComponent;
  let fixture: ComponentFixture<DasboardRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
