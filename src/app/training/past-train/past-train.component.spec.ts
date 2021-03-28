import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTrainComponent } from './past-train.component';

describe('PastTrainComponent', () => {
  let component: PastTrainComponent;
  let fixture: ComponentFixture<PastTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
