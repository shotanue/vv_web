import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootDrawerComponent } from './foot-drawer.component';

describe('FootDrawerComponent', () => {
  let component: FootDrawerComponent;
  let fixture: ComponentFixture<FootDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
