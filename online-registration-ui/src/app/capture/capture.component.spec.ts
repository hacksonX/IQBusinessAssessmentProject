import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureComponent } from './capture.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnlineRegistrationControllerService } from '../api/services';
import { of } from 'rxjs';

describe('CaptureComponent', () => {
  let component: CaptureComponent;
  let fixture: ComponentFixture<CaptureComponent>;

  let onlineRegistrationControllerService: OnlineRegistrationControllerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureComponent ],
      imports: [
        FormsModule,
        BlockUIModule.forRoot(),
        BrowserAnimationsModule,
        HttpClientModule,
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
    spyOn(onlineRegistrationControllerService, 'registerUserUsingPOST').and.returnValue(
      of(true)
    );
    fixture = TestBed.createComponent(CaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register a user', () => {
    component.firstName = 'John';
    component.middleName = 'James';
    component.lastName = 'Doe';
    component.idNumber = 1234567890123;
    component.saveUser();
    expect(component.displaySaveStatus).toHaveBeenCalled;
  });
});
