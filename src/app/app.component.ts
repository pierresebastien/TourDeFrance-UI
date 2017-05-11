import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { Section } from './components/menu/models/section';

@Component({
  selector: 'tdf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public sections: Section[];

  constructor(private translate: TranslateService) {
    /*let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    translate.setDefaultLang('fr');*/
  }

  ngOnInit(): void {
    this.sections = [
      {
        name: 'Home',
        isOpen: true,
        pages: [
          { name: 'Games', icon: 'bicycle', route: '/games', isSelected: true },
          { name: 'History', icon: 'trophy', route: '/history', isSelected: false }
        ]
      },
      {
        name: 'Management',
        isOpen: false,
        pages: [
          { name: 'Drinks', icon: 'beer', route: '/management/drinks', isSelected: false },
          { name: 'Stages', icon: 'map-marker', route: '/management/stages', isSelected: false },
          { name: 'Races', icon: 'map-o', route: '/management/races', isSelected: false },
          { name: 'Riders', icon: 'user', route: '/management/riders', isSelected: false },
          { name: 'Teams', icon: 'users', route: '/management/teams', isSelected: false }
        ]
      },
      {
        name: 'Administration',
        isOpen: false,
        pages: [
          { name: 'Users', icon: 'user', route: '/admin/users', isSelected: false },
          { name: 'Config', icon: 'wrench', route: '/admin/config', isSelected: false }
        ]
      }
    ];
  }
}
