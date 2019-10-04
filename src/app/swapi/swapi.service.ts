import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SwapiService {
	private baseUrl: string = 'https://swapi.co/api';
	private peopleBaseUrl: string = 'https://swapi.co/api/people';
	private nextPeoplePage: string;
	private nextPageBs: BehaviorSubject<string> = new BehaviorSubject<string>(this.nextPeoplePage);
	public nextPage$: Observable<string> = this.nextPageBs.asObservable();
	private prevPeoplePage: string;
	private prevPageBs: BehaviorSubject<string> = new BehaviorSubject<string>(this.prevPeoplePage);
	public prevPage$: Observable<string> = this.prevPageBs.asObservable();

	constructor(private _http: HttpClient) {}

	getPeople(url: string = this.peopleBaseUrl) {
		return this._http.get(url).pipe(
			tap((data: any) => {
				this.nextPeoplePage = data.next;
				this.nextPageBs.next(this.nextPeoplePage);
				this.prevPeoplePage = data.previous;
				this.prevPageBs.next(this.prevPeoplePage);
				return data;
			}),
			map((data: any) => data.results),
			map((data: any[]) => {
				return data.map(it => ({ name: it.name, homeworld: it.homeworld, hairColor: it.hair_color }));
			}),
		);
	}

	getPersonById(id: number | string) {
		return this._http.get(`${this.baseUrl}/people/${id}`);
	}
}
