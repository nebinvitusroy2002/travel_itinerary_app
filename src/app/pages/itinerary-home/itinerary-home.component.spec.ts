import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryHomeComponent } from './itinerary-home.component';

describe('ItineraryHomeComponent', () => {
  let component: ItineraryHomeComponent;
  let fixture: ComponentFixture<ItineraryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItineraryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
