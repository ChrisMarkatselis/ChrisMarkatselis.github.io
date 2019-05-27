import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncertBugComponent } from './incert-bug.component';

describe('IncertBugComponent', () => {
  let component: IncertBugComponent;
  let fixture: ComponentFixture<IncertBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncertBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncertBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
