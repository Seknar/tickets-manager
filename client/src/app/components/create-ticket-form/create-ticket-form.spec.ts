import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTicketForm } from './create-ticket-form';

describe('CreateTicketForm', () => {
  let component: CreateTicketForm;
  let fixture: ComponentFixture<CreateTicketForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTicketForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTicketForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
