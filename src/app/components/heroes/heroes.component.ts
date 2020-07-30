import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { HeroService, IHero } from './../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: IHero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  heroDetails(index: number): void{
    this.router.navigate(['/hero', index]);
  }

}
