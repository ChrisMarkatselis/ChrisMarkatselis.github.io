import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutBugComponent } from './put-bug.component';

describe('PutBugComponent', () => {
  let component: PutBugComponent;
  let fixture: ComponentFixture<PutBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
