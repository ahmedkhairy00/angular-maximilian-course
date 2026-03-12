import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputs } from './user-inputs';

describe('UserInputs', () => {
  let component: UserInputs;
  let fixture: ComponentFixture<UserInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInputs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
