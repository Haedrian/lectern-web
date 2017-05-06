import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from "../article";
import 'rxjs/add/operator/switchMap';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleService.getArticle(params['name']).subscribe((art) => {
        this.article = art;
      });
    });
    // .switchMap((params: Params) =>
    //   this.articleService.getArticle(params['name']).subscribe((art) => { this.article = art })
    // );
  }

  public article: Article;

}
