import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Colleges } from './colleges';

describe('Colleges', () => {
  let component: Colleges;
  let fixture: ComponentFixture<Colleges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Colleges],
    }).compileComponents();

    fixture = TestBed.createComponent(Colleges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
