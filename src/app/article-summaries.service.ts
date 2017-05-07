import { Injectable } from '@angular/core';
import { ArticleTease } from './article-tease';
import { Settings } from '../settings';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleSummariesService {

  private url = Settings.host + "/articles";

  constructor(private http: Http) {

  }

  getArticleSummaries(): Promise<ArticleTease[]> {
    return this.http.get(this.url).toPromise().then(res =>
      res.json().map((d) => { return new ArticleTease(d) })
    ).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something broke", error);
    return Promise.reject(error);
  }

}
