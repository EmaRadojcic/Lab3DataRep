import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
    export class AppComponent{
      MyMovies:any = [];

      constructor(){
      }

    // ngOnInit(){
      //  this.movieService.GetMovieData().subscribe((data)=>{
      //      this.MyMovies = data.Search;
      //  })
      }
