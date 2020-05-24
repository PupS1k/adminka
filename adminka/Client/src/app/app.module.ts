import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpinnerComponent} from './layer/spinner/components/spinner.component';
import {CoreModule} from './core/core.module';
import {RolesModule} from './roles/roles.module';
import {UsersModule} from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    RolesModule,
    UsersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
