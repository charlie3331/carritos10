import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncarroComponent } from './uncarro.component';

describe('UncarroComponent', () => {
  let component: UncarroComponent;
  let fixture: ComponentFixture<UncarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UncarroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
