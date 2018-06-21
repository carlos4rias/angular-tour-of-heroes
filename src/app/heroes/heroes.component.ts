import { HEROES } from './../mock-heroes';
import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
	hero: Hero;
	heroes: Array<Hero> = HEROES;
	selectedHero: Hero;

	constructor() {
		this.hero = new Hero(1, 'Blow');
	}

	ngOnInit() {}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		console.log(this.selectedHero);
	}
}
