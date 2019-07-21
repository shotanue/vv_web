import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-link-button',
  template: `<a class="btn-flat-simple" routerLink="{{href}}">{{msg}}</a>`,
  styleUrls: ['./link-button.component.styl']
})
export class LinkButtonComponent implements OnInit {
  @Input() href: string;
  @Input() msg: string;

  constructor() {
  }

  ngOnInit() {
  }
}
