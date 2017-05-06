import { Injectable } from '@angular/core';
import { Article } from './article';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class ArticleService {

  constructor() { }

  private dummyArticle = {
    "title": "Crisis in Llamatown",
    "tease": "A crisis has occured in Llamatown when el presidente shot a llama for no reason",
    "sections": [
      {
        "title": "Background",
        "content": "Llamas are awesome creatures",
        "references": [
          {
            "name": "Llamas are awesome",
            "source": "Llama News Network",
            "url": "http://www.example.com"
          }
        ]
      },
      {
        "title": "Conclusion",
        "content": "Llamas are still awesome creatures",
        "references": [
          {
            "name": "Llamas are still awesome",
            "source": "Llama News Network",
            "url": "http://www.example.com/awesome"
          }
        ]
      }
    ],
    "tags": [
      "llama",
      "pj",
      "crisis",
      "llamatown"
    ],
    "links": {
      "people": [
        {
          "name": "Juliet Borg",
          "category": "accused"
        },
        {
          "name": "Marphy",
          "category": "accuser"
        }
      ],
      "articles": [
        {
          "name": "Something that once happened",
          "category": "further reading"
        }
      ]
    },
    "date": new Date("2017-01-01T00:00:00.000+0000"),
    "dateCreated": new Date("2017-02-01T00:00:00.000+0000"),
    "lastModified": new Date("2017-03-01T00:00:00.000+0000")
  }

  getArticle(name: string): Observable<Article> {
    return Observable.fromPromise
      (Promise.resolve(new Article(this.dummyArticle)));
  }
}
