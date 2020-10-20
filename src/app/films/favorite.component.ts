import { Component, OnInit } from '@angular/core';
import { FilmService } from './shared/films.service';
import { IFilm } from './shared/films.model';
import { observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatCard} from '@angular/material/card'

@Component({
    selector: '',
    templateUrl: './favorite.component.html',
    styles: [`
    .card { min-height: 350px; }
    .card { max-height: 350px; }
    hr{border-top: 1px solid red}
    /* i{color: red; cursor: pointer} */
    /* .example-card{max-width:280px; min-height: 350px; background-color: black; color: white} */
    
  i{color : red; cursor: pointer}
    ::ng-deep mat-spinner{color: red}

    ::ng-deep .mine {
            background-color: black;
            color: white;max-width:300px; min-height: 250px }
           /* ::ng-deep .example-card{
            background-color: black
           }  */
    `]
})
export class FavoriteComponent implements OnInit  {
    movies:any =[];
    errorMessage = '';
    isLoading = false ;
    constructor(private filmService: FilmService, private route: ActivatedRoute){

    }

    

    ngOnInit(){        
         this.getFavMovies()           
    }
    getFavMovies() {
        this.filmService.getFavorites().subscribe(data=> {
            this.movies = [];
           Object.keys(data).map((key)=> {this.movies.push(data[key])}) 
           this.isLoading = true;
        })
    }

    removeFav(event): void{
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
         let value = idAttr.nodeValue;
        this.filmService.removeFavorite(value).subscribe(res=> {
            alert('Film removed')
            this.ngOnInit();
        })
    }

    
}