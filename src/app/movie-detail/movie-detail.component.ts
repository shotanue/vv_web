import {Component, OnInit} from '@angular/core';
import {MovieDetailInterface, toImgUrl} from '../dashboard/dashboard.component';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MovieService, Translation} from '../movie/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.styl']
})
export class MovieDetailComponent implements OnInit {
  detail: MovieDetailInterface;
  private imgUrl = '';
  private translation: Translation;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      // todo detail page
      // this.movieService.fetchDetail(id).subscribe(detail => {
      //   this.init(detail);
      // });

      this.movieService.fetchTranslations(id).subscribe(translations => {
        this.translation = (() => {
          let ja = null;
          let en = null;

          // 1回のループで済ませる
          translations.translations.forEach(translation => {
              if (translation.iso_639_1 === 'ja' && translation.iso_3166_1 === 'JP') {
                ja = translation;
              }
              if (translation.iso_639_1 === 'en' && translation.iso_3166_1 === 'US') {
                en = translation;
              }
            }
          );

          // 日本語があったら日本語のあらすじを入れる
          if (ja !== null) {
            return ja;
          }
          return en;
        })();
      });
    });
  }


  init(detail: MovieDetailInterface) {
    this.detail = null;
    this.imgUrl = toImgUrl(detail.poster_path);
  }
}
