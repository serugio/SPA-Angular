import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../services/heroes/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroes:Heroe [] ;
  constructor(private _heroesService:HeroesService, private router:Router) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  public verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
