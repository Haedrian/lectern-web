import { Injectable } from '@angular/core';

import { Settings } from '../settings';
import { Http } from '@angular/http';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/toPromise';

import { Person } from './person';

@Injectable()
export class PersonService {

  constructor(private http: Http) { }

  private url = Settings.host + "/people";

  
  getPeople(query = null, page = 0): Promise<Person[]> {
    let reqUrl = this.url;

    reqUrl += "?page=" + page;

    if (query) {
      reqUrl += "&query=" + query;
    }

    return this.http.get(reqUrl).toPromise().then((res) =>
      res.json().map((d) => { return new Person(d) })).catch(this.handleError);
  }

  getPerson(name: string): Promise<Person> {
    let reqUrl = this.url;

    reqUrl += "/" + name;

    return this.http.get(reqUrl).toPromise().then((res) =>
      new Person(res.json())).catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error("Something broke", error);
    return Promise.reject(error);
  }

}
