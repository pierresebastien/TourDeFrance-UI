import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Third party dependencies
import { MatSidenavModule, MatIconModule, MatIconRegistry } from '@angular/material';
import 'hammerjs'; // Gesture support for some material components
import { TranslateModule } from '@ngx-translate/core';

// Application Components
import { MenuComponent } from './menu.component';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    TranslateModule
  ],
  declarations: [
    MenuComponent,
    MenuToggleComponent,
    MenuLinkComponent
  ],
  exports: [MenuComponent],
  providers: [MatIconRegistry]
})

export class MenuModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
