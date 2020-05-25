import {Component} from '@angular/core';
import {SpinnerService} from './layer/spinner/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSpin$ = this.spinnerService.isSpin$;

  constructor(private spinnerService: SpinnerService) {}
}
