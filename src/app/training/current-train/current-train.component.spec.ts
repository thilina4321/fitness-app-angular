import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrainComponent } from './current-train.component';

describe('CurrentTrainComponent', () => {
  let component: CurrentTrainComponent;
  let fixture: ComponentFixture<CurrentTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
