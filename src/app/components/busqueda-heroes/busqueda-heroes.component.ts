import {Component, Input, OnInit} from '@angular/core';
import {HeroesService} from '../../services/heroes/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-busqueda-heroes',
  templateUrl: './busqueda-heroes.component.html'
})

export class BusquedaHeroesComponent implements OnInit {

  @Input() heroes:any[] = [];

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
      if (this.heroes.length == 0){

        this.router.navigate(['heroesNotFound']);
      }
    })
  }

}
