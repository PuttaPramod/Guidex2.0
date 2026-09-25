import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StreamDetail } from './stream-detail';

describe('StreamDetail', () => {
  let component: StreamDetail;
  let fixture: ComponentFixture<StreamDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(StreamDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
