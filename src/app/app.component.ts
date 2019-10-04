import { Component, OnInit } from '@angular/core';
import { SwapiService } from './swapi/swapi.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'md-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'motiv-demo';
	public nextPage$: Observable<string>;
	public prevPage$: Observable<string>;

	constructor(private _swapi: SwapiService) {}

	ngOnInit() {
		this.nextPage$ = this._swapi.nextPage$;
		this.prevPage$ = this._swapi.prevPage$;
	}

	people$: Observable<any> = this._swapi.getPeople();

	updatePeople(url: string) {
		this.people$ = this._swapi.getPeople(url);
	}
}
