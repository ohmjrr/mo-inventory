import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCriteriaComponent } from './by-criteria.component';

describe('ByCriteriaComponent', () => {
  let component: ByCriteriaComponent;
  let fixture: ComponentFixture<ByCriteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByCriteriaComponent]
    });
    fixture = TestBed.createComponent(ByCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
