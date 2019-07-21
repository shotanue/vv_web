import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

declare var ttplugin;

export enum RegisterType {
  Release
}

type ISO8601 = string;

export interface AddReleaseDate {
  type: RegisterType.Release;
  title: string;
  releaseDate: ISO8601;
  allDay: boolean;
}

type RegisterData = AddReleaseDate;


@Component({
  selector: 'app-timetree',
  templateUrl: './timetree.component.html',
  styleUrls: ['./timetree.component.styl']
})
export class TimetreeComponent implements OnInit, AfterViewInit {
  @Input() registerData: RegisterData;

  constructor() {
  }

  ngOnInit() {
    const convert = (ymd: string): ISO8601 => {
      return new Date(ymd).toISOString();
    };
    this.registerData.releaseDate = convert(this.registerData.releaseDate);
  }

  ngAfterViewInit(): void {
    ttplugin.load();
  }
}
