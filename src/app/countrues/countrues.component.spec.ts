import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountruesComponent } from './countrues.component';

describe('CountruesComponent', () => {
  let component: CountruesComponent;
  let fixture: ComponentFixture<CountruesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountruesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountruesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
