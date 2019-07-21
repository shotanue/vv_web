import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieDetailInterface, PopularMovieInterface} from '../dashboard/dashboard.component';
import {Apollo, Query} from 'apollo-angular';
import gql from 'graphql-tag';
import {ApolloQueryResult} from 'apollo-client';

export interface Results<T> {
  results: T[];
}

interface Translations {
  id: number;
  translations: Translation[];
}

export interface Translation {
  iso_3166_1: string; // JP
  iso_639_1: string; // ja
  name: string;
  english_name: string;
  data: {
    title: string;
    overview: string;
    homepage: string;
  };
}

export type Summary = PopularMovieInterface;

interface DashboardMovies {
  hotMovies: Summary[];
  comingSoonMovies: Summary[];
}

class HotMoviesGQL extends Query<DashboardMovies> {
  document = gql`
    {
      hotMovies{
        adult
        backdrop_path
        genre_ids
        id
        original_language
        original_title
        overview
        poster_path
        release_date
        title
      }
      comingSoonMovies{
        adult
        backdrop_path
        genre_ids
        id
        original_language
        original_title
        overview
        poster_path
        release_date
        title
      }
    }
  `;
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apollo: Apollo, private http: HttpClient) {
  }

  public fetchPopular(): Observable<ApolloQueryResult<DashboardMovies>> {
    const tmp = new HotMoviesGQL(this.apollo).fetch();
    return tmp;
  }

  public fetchDetail(id: number): Observable<MovieDetailInterface> {
    // todo GraphQL化
    const apiKey = '';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ja-JP&region=JP`;
    return this.http.get(url) as Observable<MovieDetailInterface>;
  }

  public fetchTranslations(id: number): Observable<Translations> {
    // todo GraphQL化
    const apiKey = '';
    const url = `https://api.themoviedb.org/3/movie/${id}/translations?api_key=${apiKey}`;
    return this.http.get(url) as Observable<Translations>;
  }
}
