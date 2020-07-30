import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {HeroService, IHero} from './../../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {

  hero: IHero = null;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => this.getHero(params.id));    
  }

  private getHero(id: number): void{
    this.hero = this.heroService.getHero(id);
  }

}
