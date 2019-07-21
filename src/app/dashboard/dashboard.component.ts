import {Component, OnInit} from '@angular/core';
import {MovieService, Summary} from '../movie/movie.service';
import {CanCarousel, CarouselItem} from '../carousel/carousel.component';


export interface PopularMovieInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const toImgUrl = (url: string) => {
  return `https://image.tmdb.org/t/p/w370_and_h556_bestv2${url}`;
};

export class PopularMovies implements CanCarousel {
  private readonly _movies: PopularMovieInterface[];

  constructor(movies: PopularMovieInterface[]) {
    this._movies = movies;
  }

  toCarousel(): CarouselItem[] {
    return this._movies.map<CarouselItem>((movie: PopularMovieInterface) => {
      return {id: movie.id, imgUrl: toImgUrl(movie.poster_path)};
    });
  }

  pickOneItemFromFirst(take: number): PopularMovieInterface {
    // 先頭から指定の範囲内でランダムに取り出す
    let array: number[];
    array = Array.from(Array(take), (v, k) => k);
    const randomIndex = array[Math.floor(Math.random() * array.length)];
    return this._movies[randomIndex];
  }
}

export interface MovieDetailInterface {
  genres: { id: number, name: string };
  // todo feature-collection
  // belongs_to_collection: null | {
  //   id: number,
  //   name: string,
  //   poster_path: string,
  //   backdrop_path: string,
  // };
  // todo feature-production company
  // production_companies:{}
  homepage: string;
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  backdrop_path: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  popularMovies: PopularMovies;
  comingSoonMovies: PopularMovies;
  msg = '';

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.fetchPopular().subscribe((res) => {
      console.log(res);
      this.popularMovies = new PopularMovies(res.data.hotMovies);
      this.comingSoonMovies = new PopularMovies(res.data.comingSoonMovies);
    });
  }
}
