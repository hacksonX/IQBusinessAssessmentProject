import { Component } from '@angular/core';
import { OnlineRegistrationControllerService } from './api/services';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { User } from './api/models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-registration';
}
