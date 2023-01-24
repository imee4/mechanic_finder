import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCartegoriesComponent } from './service-cartegories.component';

describe('ServiceCartegoriesComponent', () => {
  let component: ServiceCartegoriesComponent;
  let fixture: ComponentFixture<ServiceCartegoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCartegoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCartegoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
