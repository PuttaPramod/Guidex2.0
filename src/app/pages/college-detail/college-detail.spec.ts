import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollegeDetail } from './college-detail';

describe('CollegeDetail', () => {
  let component: CollegeDetail;
  let fixture: ComponentFixture<CollegeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CollegeDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
