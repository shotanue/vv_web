import {Component, Input, OnInit} from '@angular/core';
import {CanCarousel} from '../../carousel/carousel.component';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.styl']
})
export class ComingSoonComponent implements OnInit {
  @Input() comingSoonMovies: CanCarousel;

  constructor() {
  }

  ngOnInit() {
  }

}
