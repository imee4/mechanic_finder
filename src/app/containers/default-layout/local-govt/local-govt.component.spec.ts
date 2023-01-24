import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalGovtComponent } from './local-govt.component';

describe('LocalGovtComponent', () => {
  let component: LocalGovtComponent;
  let fixture: ComponentFixture<LocalGovtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalGovtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalGovtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
