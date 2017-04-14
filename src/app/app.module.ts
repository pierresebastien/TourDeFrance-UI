import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Gesture support for some material components
import 'hammerjs';
import { RestangularModule, Restangular } from 'ng2-restangular';

// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  const apiUrl: string = window.location.protocol.concat('//').concat(window.location.hostname).concat('/api');
  RestangularProvider.setBaseUrl(apiUrl);
  RestangularProvider.setDefaultHeaders({ 'Accept': 'application/json' });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
