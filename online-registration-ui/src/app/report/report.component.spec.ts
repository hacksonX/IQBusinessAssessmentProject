import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OnlineRegistrationControllerService } from '../api/services';
import { of } from 'rxjs';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  let onlineRegistrationControllerService: OnlineRegistrationControllerService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportComponent ],
      imports: [
        HttpClientModule,
        BlockUIModule.forRoot(),
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatTabsModule,
        FontAwesomeModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    onlineRegistrationControllerService = TestBed.get(OnlineRegistrationControllerService);
    spyOn(onlineRegistrationControllerService, 'getAllRegisteredUsersUsingGET').and.returnValue(
      of([
        {
          id: 1,
          firstName: 'John',
          middleName: 'James',
          lastName: 'Doe',
          idNumber: 1234567890123
        }
      ])
    );
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve registered users', () => {
    expect(component.registeredUsers.length).toEqual(1);
  });
});
