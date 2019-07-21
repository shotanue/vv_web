import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-foot-drawer',
  templateUrl: './foot-drawer.component.html',
  styleUrls: ['./foot-drawer.component.styl']
})
export class FootDrawerComponent implements OnInit {
  @Output() isOpen: EventEmitter<string> = new EventEmitter(); // 追加

  constructor() {
  }

  ngOnInit() {
  }

  open() {
    this.isOpen.emit('is-open');
  }
}
