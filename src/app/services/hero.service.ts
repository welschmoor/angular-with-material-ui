import { Injectable } from '@angular/core'
import { Hero } from '../hero'
import { heroes } from '../data'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return heroes
  }
}
