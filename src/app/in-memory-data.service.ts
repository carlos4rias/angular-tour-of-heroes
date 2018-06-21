import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	constructor() {}
	createDb() {
		const heroes = [
			{ id: 1, name: 'Peter' },
			{ id: 2, name: 'Pan' },
			{ id: 3, name: 'Super' },
			{ id: 4, name: 'Man' },
			{ id: 5, name: 'Felix' },
			{ id: 6, name: 'Mega' },
			{ id: 7, name: 'Wolve' },
			{ id: 8, name: 'Rin' },
			{ id: 9, name: 'Thunder' },
			{ id: 10, name: 'Flash' }
		];
		return { heroes };
	}
}
