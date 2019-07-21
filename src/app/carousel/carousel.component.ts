import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../movie/movie.service';
import {ModalService} from '../modal/modal.service';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';

export interface CarouselItem {
  id: number;
  imgUrl: string;
}

export interface CanCarousel {
  toCarousel(): CarouselItem[];
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.styl']
})
export class CarouselComponent implements OnInit {
  @Input() items: CanCarousel;
  carouselItems: CarouselItem[];

  constructor(private movieService: MovieService, private modalService: ModalService) {
  }

  ngOnInit() {
    this.carouselItems = this.items.toCarousel();
  }

  setModal(item: CarouselItem) {
    this.movieService.fetchDetail(item.id).subscribe(detail => {
      // 詳細データの画像がカルーセルなどと違ったら嫌なので、合わせる
      this.modalService.open(MovieDetailComponent, {detail, imgUrl: item.imgUrl});
    });
  }
}
