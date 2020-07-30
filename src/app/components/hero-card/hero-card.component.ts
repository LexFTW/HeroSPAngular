import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

import {IHero} from './../../services/hero.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: IHero;
  @Input() index: number;

  // @Output() heroSelected: EventEmitter<number>;

  constructor(
    private router: Router
  ) {
    // this.heroSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }
  
  heroDetails(): void{
    // this.heroSelected.emit(this.index);
    this.router.navigate(['/hero', this.index]);
  }
}
