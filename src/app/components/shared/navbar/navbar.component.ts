import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {IHero} from './../../../services/hero.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroArray: IHero[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  searchHero(heroSearch: string){
    this.router.navigate(['search', heroSearch]);
  }

}
