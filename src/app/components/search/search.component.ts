import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {HeroService, IHero} from './../../services/hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = null;
  heroes: IHero[] = [];

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('Seach complete');
    
    this.activatedRoute.params.subscribe(params => this.searchHeroes(params.heroes))
  }

  searchHeroes(heroes: string): void{
    this.term = heroes;
    this.heroes = this.heroService.getHeroSearch(this.term);
  }

}
