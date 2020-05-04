import { Component, OnInit } from '@angular/core';
import { FilmService } from './shared/films.service';
import { IFilm } from './shared/films.model';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  templateUrl:'./film-list.component.html',
  styles: [`
  .card { min-height: 250px; }
  .card { max-height: 350px; }
  body{font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;}

  `]
})

export class FilmListComponent implements OnInit{
  obj;
  ids: string[] = [];
  favv;
  _listFilter: string;

  get filmFilter(): string{
    return this._listFilter
  }

  set filmFilter(value: string){
     this._listFilter = value;
     this.filteredFilms = this.filmFilter ? this.performFilter(this.filmFilter) : this.films;

  }



  films:IFilm[];
  filteredFilms:IFilm[];

  constructor(private route: ActivatedRoute, private filmservice: FilmService){
    // this.filteredFilms = this.films;
    this.filmFilter = ''
  }


  ngOnInit(): void{
    this.films = this.route.snapshot.data['films']
    this.filteredFilms = this.films;
    console.log(this.films);
   
    
  
  }

 

  
  performFilter(filterBy: string): IFilm[]{
    filterBy = filterBy.toLowerCase();
    return this.films.filter((film: IFilm) =>
      film.title.toLocaleLowerCase().indexOf(filterBy) > -1);
   }


}
