
import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Poopman"
  }
  heroes: Hero[]
  selectedHero?: Hero

  constructor(private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    )
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero)
  }

  clearHeroes() {
    this.selectedHero = undefined
  }

}
