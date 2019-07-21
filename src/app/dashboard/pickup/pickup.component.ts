import {Component, Input, OnInit} from '@angular/core';
import {PopularMovieInterface, PopularMovies} from '../dashboard.component';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.styl']
})
export class PickupComponent implements OnInit {
  @Input() popularMovies: PopularMovies;
  pickupMovie: PopularMovieInterface;

  constructor() {
  }

  ngOnInit() {
    this.pickupMovie = this.popularMovies.pickOneItemFromFirst(5);
  }
}
