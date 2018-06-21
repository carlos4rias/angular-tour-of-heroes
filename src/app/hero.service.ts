import { MessageService } from './message.service';
import { Hero } from './hero.interface';
import { HEROES } from './heroes.mock';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HeroService {
	constructor(private messageService: MessageService) {}

	getHeroes(): Observable<Hero[]> {
		this.messageService.add('HeroService: fetched heroes');
		return of(HEROES);
	}

	getHero(heroId: number): Observable<Hero> {
		this.messageService.add(`HeroService: fetched hero id=${heroId}`);
		return of(HEROES.find((hero) => hero.id === heroId));
	}
}
