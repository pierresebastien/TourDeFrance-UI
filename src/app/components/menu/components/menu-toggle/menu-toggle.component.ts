import { Component, OnInit, Input } from '@angular/core';

import { Section } from '../../models/section';

@Component({
  selector: 'tdf-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.scss']
})
export class MenuToggleComponent implements OnInit {

  @Input() section: Section;

  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    // var $ul = this.$element.find('ul');
    // var $li = $ul[0].querySelector('a.active');
    // var docsMenuContent = document.querySelector('.site-menu').parentNode;
    // var targetHeight = open ? this.getTargetHeight($ul) : 0;
    // $ul.css({ height: targetHeight + 'px' });

    // // If we are open and the user has not scrolled the content div; scroll the active
    // // list item into view.
    // if (open && $li && $li.offsetParent && $ul[0].scrollTop === 0) {
    // 	var activeHeight = $li.scrollHeight;
    // 	var activeOffset = $li.offsetTop;
    // 	var parentOffset = $li.offsetParent.offsetTop;

    // 	// Reduce it a bit (2 list items' height worth) so it doesn't touch the nav
    // 	var negativeOffset = activeHeight * 2;
    // 	var newScrollTop = activeOffset + parentOffset - negativeOffset;

    // 	this.$mdUtil.animateScrollTo(docsMenuContent, newScrollTop);
    // }

    // this.section.isOpen = false;
  }

  // private getTargetHeight($ul) {
  //   var targetHeight;
  //   $ul.addClass('no-transition');
  //   $ul.css('height', '');
  //   targetHeight = $ul.prop('clientHeight');
  //   $ul.css('height', 0);
  //   $ul.removeClass('no-transition');
  //   return targetHeight;
  // }
}
