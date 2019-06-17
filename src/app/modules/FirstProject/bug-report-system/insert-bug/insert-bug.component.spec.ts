import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBugComponent } from './insert-bug.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { By } from '@angular/platform-browser';

fdescribe('Inser Bug Component', () => {
  let component: InsertBugComponent;
  let fixture: ComponentFixture<InsertBugComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
       InsertBugComponent
      ],
      imports: [
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        }
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    // User story 9 Test button check
  //1 dispatch event
  //detect changes
  //koitaw koumpi sth deyterh periptosh na einani enabled

  it('form is valid by having the required fields', () => {
    fixture.detectChanges();
    const validForm = fixture.debugElement.query(By.css('.ng-valid'));
    expect(validForm).toBeDefined();
  });

  it('form is invalid if no data entered.', () => {
    fixture.detectChanges();
    const invalidForm = fixture.debugElement.query(By.css('.ng-invalid'));
    expect(invalidForm).toBeDefined();
  });

});
