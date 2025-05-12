import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cita1Component } from './cita1.component';

describe('Cita1Component', () => {
  let component: Cita1Component;
  let fixture: ComponentFixture<Cita1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cita1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cita1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
