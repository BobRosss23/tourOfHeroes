import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    console.log(this.heroService)
    console.log(this.heroes[1].name + " no idea")

    for (var rows in this.heroes ){

      console.log("rows : " + rows)
    }


  }
}
