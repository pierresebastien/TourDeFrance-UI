import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third party dependencies
import { MaterialModule } from '@angular/material';
import 'hammerjs'; // Gesture support for some material components
import { FlexLayoutModule } from '@angular/flex-layout';

// Application Components
import { MenuComponent } from './menu.component';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule.forRoot(),
    FlexLayoutModule
  ],
  declarations: [
    MenuToggleComponent,
    MenuLinkComponent
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
