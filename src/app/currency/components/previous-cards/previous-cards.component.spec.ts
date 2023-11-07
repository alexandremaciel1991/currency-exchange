import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCardsComponent } from './previous-cards.component';

describe('PreviousCardsComponent', () => {
  let component: PreviousCardsComponent;
  let fixture: ComponentFixture<PreviousCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousCardsComponent]
    });
    fixture = TestBed.createComponent(PreviousCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
