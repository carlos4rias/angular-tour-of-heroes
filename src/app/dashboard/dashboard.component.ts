import { Hero } from './../hero.interface';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];
	constructor(private heroService: HeroService) {}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes().subscribe((data) => (this.heroes = data.slice(0, 4)));
	}
}
