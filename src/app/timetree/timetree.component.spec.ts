import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetreeComponent } from './timetree.component';

describe('TimetreeComponent', () => {
  let component: TimetreeComponent;
  let fixture: ComponentFixture<TimetreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
