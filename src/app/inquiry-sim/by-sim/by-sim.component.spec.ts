import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BySimComponent } from './by-sim.component';

describe('BySimComponent', () => {
  let component: BySimComponent;
  let fixture: ComponentFixture<BySimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BySimComponent]
    });
    fixture = TestBed.createComponent(BySimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
