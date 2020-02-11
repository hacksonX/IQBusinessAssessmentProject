import { Component, OnInit, Input } from '@angular/core';
import { OnlineRegistrationControllerService } from '../api/services';
import { User } from '../api/models';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  @Input() registeredUsers: Array<User>;

  @BlockUI() blockUI: NgBlockUI;

  constructor(private onlineRegistrationControllerService: OnlineRegistrationControllerService, 
    private snackBar: MatSnackBar) {
    this.blockUI.start();
    this.onlineRegistrationControllerService.getAllRegisteredUsersUsingGET().pipe(
      finalize(
        () => this.blockUI.stop()
      )
    ).subscribe(
      response => {
        if(response.length === 0) {
          this.displaySaveStatus('No information has been saved yet');
        }
        this.registeredUsers = response
      },
      error => {
        this.displaySaveStatus('Server returned errors');
      }
    )
  }

  displaySaveStatus(message: string): void {
    this.snackBar.open(message, null, {
      duration: 5000,
      verticalPosition: 'top'
    });
  }



}
