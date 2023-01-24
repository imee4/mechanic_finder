import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesOnMapComponent } from './activites-on-map.component';

describe('ActivitesOnMapComponent', () => {
  let component: ActivitesOnMapComponent;
  let fixture: ComponentFixture<ActivitesOnMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitesOnMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitesOnMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
