import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SpinnerService {
  isSpin$ = new Subject();

  showSpinner() {
    this.isSpin$.next(true);
  }

  hideSpinner() {
    this.isSpin$.next(false);
  }
}
