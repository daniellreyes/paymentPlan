import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPaymentComponent } from './next-payment.component';

describe('NextPaymentComponent', () => {
  let component: NextPaymentComponent;
  let fixture: ComponentFixture<NextPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextPaymentComponent]
    });
    fixture = TestBed.createComponent(NextPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
