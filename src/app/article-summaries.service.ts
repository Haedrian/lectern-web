import { Injectable } from '@angular/core';
import { ArticleTease } from './article-tease';

@Injectable()
export class ArticleSummariesService {

  getArticleSummaries(): Promise<ArticleTease[]> {
    let articles = [
      new ArticleTease({ title: "Test", tease: "I am a test", date: new Date(), lastUpdated: new Date() }),
      new ArticleTease({ title: "Test2", tease: "I am also a test", date: new Date(), lastUpdated: new Date() }),
      new ArticleTease({ title: "Test3", tease: "Lorem ipsum and all that jazz", date: new Date(), lastUpdated: new Date() }),
    ]

    return Promise.resolve(articles);
  }

}
