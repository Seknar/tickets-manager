import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTicketPage } from './single-ticket-page';

describe('SingleTicketPage', () => {
  let component: SingleTicketPage;
  let fixture: ComponentFixture<SingleTicketPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleTicketPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleTicketPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
