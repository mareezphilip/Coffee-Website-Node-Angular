import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprofileComponent } from './showprofile.component';

describe('ShowprofileComponent', () => {
  let component: ShowprofileComponent;
  let fixture: ComponentFixture<ShowprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowprofileComponent]
    });
    fixture = TestBed.createComponent(ShowprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
