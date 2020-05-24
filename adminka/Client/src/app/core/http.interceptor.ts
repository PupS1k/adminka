import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {SpinnerService} from '../layer/spinner/services/spinner.service';

@Injectable()
export class ReqInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.showSpinner();

    return next.handle(req).pipe(finalize(() => {
      this.spinnerService.hideSpinner();
    }));
  }
}
