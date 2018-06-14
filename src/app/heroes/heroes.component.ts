import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
	hero: Hero;

	constructor() {
		this.hero = new Hero(1, 'Blow');
	}

	ngOnInit() {}
}
