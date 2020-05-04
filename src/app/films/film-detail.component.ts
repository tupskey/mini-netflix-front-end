import { Component, OnInit } from '@angular/core';
import { FilmService } from './shared/films.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IFilm } from './shared/films.model';
import {MatButton} from '@angular/material/button';

@Component({
  selector:'',
  templateUrl: './film-detail.component.html',
  styles: [`
  hr{border-top:1px solid red;}
  .example-card{max-width:280px; min-height: 350px; background-color: black; color: white}
 
  i{color : white; cursor: pointer}
  .done{color: red}
  `]
})

export class FilmDetailComponent implements OnInit{
    isLoading: boolean = false;
    dishId = [];
    film: any;
    errorMessage: any;
    movieId: string;
    isClicked = false;
    isFavorite = false;
    
    userId = localStorage.getItem('access_token')
  constructor(private filmService: FilmService,
    private route: ActivatedRoute,
    private router : Router){
      this.film = this.route.snapshot.data['film']
  }

  ngOnInit(){
    this.getFilm(this.route.snapshot.params['id']);
  }

  // getFilm(id){
  //   this.filmService.getFilm(id).subscribe(data => this.film)
  // }

  getFilm(id: IFilm){
    this.filmService.getFilm(id).subscribe((data)=> {
      this.film = data;
      this.isLoading = true;
    })
  }

  // data = {
  //   movieId : this.route.snapshot.params['id'],
  // }

  onBack(): void{
    this.router.navigate(['/films'])
  }

  Addfav(): void{
    let id = this.route.snapshot.params['id'];
    this.filmService.addFavorite(id,this.film).subscribe(result=> {
      this.errorMessage = ` ${this.film.title} has been added to favorite`;
      this.isFavorite = true;
      this.isClicked = true;
      setTimeout(()=> {
        this.ngOnInit();
      }, 3000)
     
      // this.router.navigate(['/favorites'])
    })
  }
  
}
