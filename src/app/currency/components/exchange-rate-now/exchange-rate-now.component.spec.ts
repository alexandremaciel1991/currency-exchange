import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateNowComponent } from './exchange-rate-now.component';

describe('ExchangeRateNowComponent', () => {
  let component: ExchangeRateNowComponent;
  let fixture: ComponentFixture<ExchangeRateNowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeRateNowComponent]
    });
    fixture = TestBed.createComponent(ExchangeRateNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
