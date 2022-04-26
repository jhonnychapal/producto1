import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtraPantallaComponent } from './otra-pantalla.component';

describe('OtraPantallaComponent', () => {
  let component: OtraPantallaComponent;
  let fixture: ComponentFixture<OtraPantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtraPantallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtraPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
