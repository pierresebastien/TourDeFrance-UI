import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

// Third party dependencies
import { MaterialModule } from '@angular/material';
import 'hammerjs'; // Gesture support for some material components
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestangularModule, Restangular } from 'ng2-restangular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslatePoHttpLoader } from '@biesbjerg/ngx-translate-po-http-loader';

// Application Modules
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from './components/menu/menu.module';

// Application Services
import { DrinkService } from './services/drink.service';

// Application Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DrinksComponent } from './components/management/drinks/drinks.component';
import { RacesComponent } from './components/management/races/races.component';
import { RidersComponent } from './components/management/riders/riders.component';
import { StagesComponent } from './components/management/stages/stages.component';
import { TeamsComponent } from './components/management/teams/teams.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConfigComponent } from './components/admin/config/config.component';
import { UsersComponent } from './components/admin/users/users.component';

// Function for settting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  const apiUrl: string = window.location.protocol.concat('//').concat(window.location.hostname).concat('/api');
  RestangularProvider.setBaseUrl(apiUrl);
  RestangularProvider.setDefaultHeaders({ 'Accept': 'application/json' });
}

// Compilation warning with this, see https://github.com/biesbjerg/ngx-translate-po-http-loader/issues/2
export function createTranslateLoader(http: Http) {
  return new TranslatePoHttpLoader(http, 'i18n', '.po');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrinksComponent,
    RacesComponent,
    RidersComponent,
    StagesComponent,
    TeamsComponent,
    LoginComponent,
    HomeComponent,
    ConfigComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RestangularModule.forRoot(RestangularConfigFactory),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
      }
    }),
    FlexLayoutModule,
    AppRoutingModule,
    MenuModule
  ],
  providers: [DrinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
