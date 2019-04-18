import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = _heroesService.getHeroe(params['id']);
    });

  }

}
