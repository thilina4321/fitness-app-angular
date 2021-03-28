import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopExericeComponent } from './stop-exerice.component';

describe('StopExericeComponent', () => {
  let component: StopExericeComponent;
  let fixture: ComponentFixture<StopExericeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopExericeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopExericeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
