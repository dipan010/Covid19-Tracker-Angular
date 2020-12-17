import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldhomeComponent } from './worldhome.component';

describe('WorldhomeComponent', () => {
  let component: WorldhomeComponent;
  let fixture: ComponentFixture<WorldhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
