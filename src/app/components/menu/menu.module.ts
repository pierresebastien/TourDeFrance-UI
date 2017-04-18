import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Components
import { MenuComponent } from './menu.component';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuToggleComponent,
    MenuLinkComponent
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
