import { Component, OnInit, Input } from '@angular/core';

import { Page } from '../../models/page';

@Component({
  selector: 'tdf-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss']
})
export class MenuLinkComponent implements OnInit {

  @Input() page: Page;

  ngOnInit(): void {
    // TODO
  }

  public select(): void {
    // TODO
  }
}
