import { Component, OnInit, Input } from '@angular/core';

import { Section } from './models/section';

@Component({
  selector: 'tdf-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() sections: Section[];

  constructor() { }

  ngOnInit() {
  }

}
