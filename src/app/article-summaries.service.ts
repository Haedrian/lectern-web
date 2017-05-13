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

  getArticleSummaries(query = null, page = 0): Promise<ArticleTease[]> {

    let reqUrl = this.url;

    reqUrl += "?page=" + page;

    if (query) {
      reqUrl += "&query=" + query;
    }

    return this.http.get(reqUrl).toPromise().then(res =>
      res.json().map((d) => { return new ArticleTease(d) })
    ).catch(this.handleError);
  }

  getArticleSummaryCounts(query = null): Promise<number> {
    let reqUrl = this.url + "/count";

    if (query) {
      reqUrl += "?query=" + query;
    }

    return this.http.get(reqUrl).toPromise().then((res) => {
      return Number(res.json());
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something broke", error);
    return Promise.reject(error);
  }

}
