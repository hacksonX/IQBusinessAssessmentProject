import { Component, OnInit, Input } from '@angular/core';
import { OnlineRegistrationControllerService } from '../api/services';
import { User } from '../api/models';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  @Input() registeredUsers: Array<User>;

  @BlockUI() blockUI: NgBlockUI;

  constructor(private onlineRegistrationControllerService: OnlineRegistrationControllerService) {
    this.blockUI.start();
    this.onlineRegistrationControllerService.getAllRegisteredUsersUsingGET().pipe(
      finalize(
        () => this.blockUI.stop()
      )
    ).subscribe(
      response => {
        this.registeredUsers = response
      },
      error => {
        //Todo error
      }
    )
  }



}
