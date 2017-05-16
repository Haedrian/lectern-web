import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from "../article";
import 'rxjs/add/operator/switchMap';

import * as showDown from 'showdown';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router, private location: Location) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          // you can use DomAdapter
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }
      }
    });
  }


  converter = new showDown.Converter({ simpleLineBreaks: true });

  ngOnInit() {
    this.article = this.route.snapshot.data['article'];

    let counter = 0;
    this.article.sections.forEach((s) => {
      s.content = this.converter.makeHtml(s.content);
      s.order = counter++;
    })
  }

  public article: Article;

}
