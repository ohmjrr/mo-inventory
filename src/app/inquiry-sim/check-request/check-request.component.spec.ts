import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRequestComponent } from './check-request.component';

describe('CheckRequestComponent', () => {
  let component: CheckRequestComponent;
  let fixture: ComponentFixture<CheckRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckRequestComponent]
    });
    fixture = TestBed.createComponent(CheckRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
