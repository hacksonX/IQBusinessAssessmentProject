import { Component, OnInit } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { OnlineRegistrationControllerService } from '../api/services/online-registration-controller.service';
import { User } from '../api/models';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent {

  faAddressBook = faAddressBook;
  savingUserData = false;
  firstName: string;
  middleName: string;
  lastName: string;
  idNumber: number;

  @BlockUI() blockUI: NgBlockUI;

  constructor(private onlineRegistrationControllerService: OnlineRegistrationControllerService,
    private snackBar: MatSnackBar) {

  }

  public saveUser(): boolean {
    this.blockUI.start();
    const userDetail: User = {
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      idNumber: this.idNumber,
    };
    this.onlineRegistrationControllerService.registerUserUsingPOST(userDetail).pipe(
      finalize(
        () => this.blockUI.stop()
      )
    ).subscribe(
      response => {
        this.displaySaveStatus(response, null);
      },
      error => {
        this.displaySaveStatus(null, 'Server returned errors');
      }
    );
    return false;
  }

  displaySaveStatus(saveStatus: boolean, message: string): void {
    if (saveStatus) {
      this.snackBar.open('Data is valid and has been saved', null, {
        duration: 5000,
        verticalPosition: 'top'
      });
    }
    else {
      this.snackBar.open(message === null ? 'Invalid data. Saving failed.' : message, null, {
        duration: 5000,
        verticalPosition: 'top'
      });
    }
  }

}
