import { MessageService } from './message.service';
import { Hero } from './hero.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HeroService {
	private heroesUrl: string = 'api/heroes';

	constructor(private http: HttpClient, private messageService: MessageService) {}

	getHeroes(): Observable<Hero[]> {
		// this.log('HeroService: fetched heroes');
		return this.http
			.get<Hero[]>(this.heroesUrl)
			.pipe(tap((heroes) => this.log(`fetched heroes`)), catchError(this.handleError('getHeroes', [])));
	}

	getHero(heroId: number): Observable<Hero> {
		const url = `${this.heroesUrl}/${heroId}`;
		return this.http
			.get<Hero>(url)
			.pipe(
				tap((hero) => this.log(`fetched hero id=${heroId}`)),
				catchError(this.handleError<Hero>(`getHero id=${heroId}`))
			);
	}

	private log(message: string): void {
		this.messageService.add('HeroService: ' + message);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			this.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
