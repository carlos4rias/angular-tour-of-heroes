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
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

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

	updateHero(hero: Hero): Observable<any> {
		return this.http
			.put(this.heroesUrl, hero, this.httpOptions)
			.pipe(tap((_) => this.log(`update hero id=${hero.id}`)), catchError(this.handleError<any>('updateHero')));
	}

	addHero(hero: Hero): Observable<Hero> {
		return this.http
			.post<Hero>(this.heroesUrl, hero, this.httpOptions)
			.pipe(
				tap((hero: Hero) => this.log(`added hero w/id=${hero.id}`)),
				catchError(this.handleError<Hero>('addHero'))
			);
	}

	deleteHero(hero: Hero | number): Observable<any> {
		const id = typeof hero === 'number' ? hero : hero.id;
		const url = `${this.heroesUrl}/${id}`;

		return this.http
			.delete<Hero>(url, this.httpOptions)
			.pipe(tap((_) => this.log(`delete hero id=${id}`)), catchError(this.handleError<Hero>('deleteHero')));
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
