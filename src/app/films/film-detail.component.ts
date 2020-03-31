import { Component, OnInit } from '@angular/core';
import { FilmService } from './shared/films.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IFilm } from './shared/films.model';

@Component({
  selector:'',
  templateUrl: './film-detail.component.html',
  styles: [`
  hr{border-top:1px solid red;}
  `]
})

export class FilmDetailComponent implements OnInit{
    dishId = [];
    film: any;
    errorMessage: any;
    movieId: string;
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
      this.errorMessage = 'Movie has been added to favorite';
      this.router.navigate(['/favorites'])
    })
  }
  
}
