import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicFooterComponent } from './mechanic-footer.component';

describe('MechanicFooterComponent', () => {
  let component: MechanicFooterComponent;
  let fixture: ComponentFixture<MechanicFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
