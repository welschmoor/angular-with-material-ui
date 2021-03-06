import { Injectable } from '@angular/core'
import { Hero } from '../hero'
import { heroes } from '../data'

import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add(`HeroService: Fetched Heroes`)
    return of(heroes)
  }
}
