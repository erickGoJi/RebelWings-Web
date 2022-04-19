import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalleAudioVideoSalonComponent } from './dialog-detalle-audio-video-salon.component';

describe('DialogDetalleAudioVideoSalonComponent', () => {
  let component: DialogDetalleAudioVideoSalonComponent;
  let fixture: ComponentFixture<DialogDetalleAudioVideoSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetalleAudioVideoSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalleAudioVideoSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
