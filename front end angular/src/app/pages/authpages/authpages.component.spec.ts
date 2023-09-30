import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthpagesComponent } from './authpages.component';

describe('AuthpagesComponent', () => {
  let component: AuthpagesComponent;
  let fixture: ComponentFixture<AuthpagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthpagesComponent]
    });
    fixture = TestBed.createComponent(AuthpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
