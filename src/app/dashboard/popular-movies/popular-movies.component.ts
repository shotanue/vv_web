import {Component, Input, OnInit} from '@angular/core';
import {CanCarousel} from '../../carousel/carousel.component';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.styl']
})
export class PopularMoviesComponent implements OnInit {
  @Input() popularMovies: CanCarousel;
  constructor() { }

  ngOnInit() {
  }

}
