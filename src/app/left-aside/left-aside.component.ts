import {Component, OnInit} from '@angular/core';

enum SubView {
  Genre = 'genre',
  None = 'none'
}


@Component({
  selector: 'app-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.styl']
})
export class LeftAsideComponent implements OnInit {
  public subView: SubView = SubView.None;

  constructor() {
  }

  ngOnInit() {
  }

  changeSub(subView: string) {
    switch (subView as SubView) {
      case SubView.Genre:
        this.subView = SubView.Genre;
        break;
      case SubView.None:
        this.subView = SubView.None;
        break;
      default:
        this.subView = SubView.None;
        console.log('unknown subtype');
    }
  }

  hasSubView() {
    return this.subView !== SubView.None;
  }
}
