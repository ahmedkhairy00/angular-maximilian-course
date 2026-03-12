import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsResults } from './investments-results';

describe('InvestmentsResults', () => {
  let component: InvestmentsResults;
  let fixture: ComponentFixture<InvestmentsResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsResults);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
