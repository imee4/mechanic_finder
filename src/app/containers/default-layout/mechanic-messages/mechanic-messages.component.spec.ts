import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicMessagesComponent } from './mechanic-messages.component';

describe('MechanicMessagesComponent', () => {
  let component: MechanicMessagesComponent;
  let fixture: ComponentFixture<MechanicMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
