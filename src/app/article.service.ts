import { Injectable } from '@angular/core';
import { Article } from './article';
import { Observable } from "rxjs/Observable";
import { Settings } from '../settings';
import { Http } from '@angular/http';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  private url = Settings.host + "/articles";

  getArticle(name: string): Observable<Article> {
    if (!name) {
      return null;
    }

    return Observable.fromPromise(this.http.get(this.url + "/" + name).toPromise().then((res) => {
        return Promise.resolve(new Article(res.json()));
    }));
  }
}
