import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByFileComponent } from './by-file.component';

describe('ByFileComponent', () => {
  let component: ByFileComponent;
  let fixture: ComponentFixture<ByFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByFileComponent]
    });
    fixture = TestBed.createComponent(ByFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
