import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';

import {  FilmsAppComponent } from './film-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { FilmListComponent } from './films/film-list.component';
import { FilmService } from './films/shared/films.service';
import { FilmDetailComponent } from './films/film-detail.component';
import { FilmResolver } from './films/filmlist.resolver';
import { FilmDetailResolver } from './films/filmdetail.resolver';
import { AuthService } from './users/auth.service';
import { FilmGuard } from './films/film.guard';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './users/auth.guard';
import { FavoriteComponent } from './films/favorite.component';
import { UserModule } from './users/user.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FilmsAppComponent,
    NavBarComponent,
    FilmListComponent,
    FilmDetailComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
   MaterialModule,
   UserModule,
   JwtModule.forRoot({
    config: {
      tokenGetter: function tokenGetter() {
       return localStorage.getItem('access_token'); },
       whitelistedDomains: ['localhost:3000'],
       blacklistedRoutes: ['http://localhost:3000/users/login']
    }
   }),
   FlexLayoutModule,
    RouterModule.forRoot([
      {path: 'films', component: FilmListComponent, resolve: {films: FilmResolver}},
      {path: 'films/:id', component: FilmDetailComponent, canActivate: [AuthGuard] },
      {path : 'favorites', component: FavoriteComponent},
      {path: 'user', loadChildren: () => import('./users/user.module').then(m => m.UserModule)}
    ])

  ],
  providers: [
    FilmService,
    FilmResolver,
    FilmDetailResolver,
    AuthService,
    AuthGuard

  ],
  bootstrap: [FilmsAppComponent]
})
export class AppModule { }
