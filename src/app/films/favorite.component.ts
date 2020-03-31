import { Component, OnInit } from '@angular/core';
import { FilmService } from './shared/films.service';
import { IFilm } from './shared/films.model';
import { observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: '',
    templateUrl: './favorite.component.html',
    styles: [`
    .card { min-height: 350px; }
    .card { max-height: 350px; }
    `]
})
export class FavoriteComponent implements OnInit  {
    movies:any =[];
    errorMessage = '';
    constructor(private filmService: FilmService, private route: ActivatedRoute){

    }

    

    ngOnInit(){        
         this.getFavMovies()           
    }
    getFavMovies() {
        this.filmService.getFavorites().subscribe(data=> {
            this.movies = [];
            // for (let key in data) {
            //     this.movies.push(data[key]);
            //     this.movies.forEach((item, index) => {
            //         if(index !== this.movies.findIndex(i => i._id === item._id)) {
            //             this.movies.splice(index, 1);
            //         }
            //     })
            //     console.log(this.movies)
            // }
           Object.keys(data).map((key)=> {this.movies.push(data[key])}) 
        })
    }

    removeFav(event): void{
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
         let value = idAttr.nodeValue;
        this.filmService.removeFavorite(value).subscribe(res=> {
            alert('Film removed')
        })
    }

    
}