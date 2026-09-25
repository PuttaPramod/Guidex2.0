import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareerDetail } from './career-detail';

describe('CareerDetail', () => {
  let component: CareerDetail;
  let fixture: ComponentFixture<CareerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
