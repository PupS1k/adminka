import {NgModule} from '@angular/core';
import {RolesResolver} from '../roles/services/roles.resolver';
import {SpinnerService} from '../layer/spinner/services/spinner.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReqInterceptor} from './http.interceptor';

@NgModule({
  providers: [
    RolesResolver,
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
