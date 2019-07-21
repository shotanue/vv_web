import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarComponent} from './calendar/calendar.component';
import {LeftAsideComponent} from './left-aside/left-aside.component';
import {FootDrawerComponent} from './foot-drawer/foot-drawer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ModalComponent} from './modal/modal.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {ModalService} from './modal/modal.service';
import {TimetreeComponent} from './timetree/timetree.component';
import {LinkButtonComponent} from './link-button/link-button.component';
import {PickupComponent} from './dashboard/pickup/pickup.component';
import {PopularMoviesComponent} from './dashboard/popular-movies/popular-movies.component';
import {ComingSoonComponent} from './dashboard/coming-soon/coming-soon.component';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-angular-link-http';
import {APOLLO_OPTIONS} from 'apollo-angular';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    LeftAsideComponent,
    FootDrawerComponent,
    DashboardComponent,
    CarouselComponent,
    ModalComponent,
    MovieDetailComponent,
    TimetreeComponent,
    LinkButtonComponent,
    PickupComponent,
    PopularMoviesComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    MatToolbarModule,
  ],
  providers: [ModalService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://api.mitaii.com/query'
          })
        };
      },
      deps: [HttpLink]
    }],
  bootstrap: [AppComponent],
  entryComponents: [
    MovieDetailComponent
  ]
})
export class AppModule {
}
