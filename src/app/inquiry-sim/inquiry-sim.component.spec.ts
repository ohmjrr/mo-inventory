import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirySimComponent } from './inquiry-sim.component';

describe('InquirySimComponent', () => {
  let component: InquirySimComponent;
  let fixture: ComponentFixture<InquirySimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquirySimComponent]
    });
    fixture = TestBed.createComponent(InquirySimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
