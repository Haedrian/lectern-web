import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private location: Location) {
  }

  converter = new showDown.Converter({ simpleLineBreaks: true });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleService.getArticle(params['name']).subscribe((art) => {
        this.article = art;

        art.sections.forEach((s) => {
          s.content = this.converter.makeHtml(s.content);
        })
      });
    });
  }

  public article: Article;

}
