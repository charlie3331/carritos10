import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cita2Component } from './cita2.component';

describe('Cita2Component', () => {
  let component: Cita2Component;
  let fixture: ComponentFixture<Cita2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cita2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cita2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
