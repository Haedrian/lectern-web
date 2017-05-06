import { Component, Input } from '@angular/core';
import {Article} from "../article";
import {ArticleTease} from "../article-tease";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent {

  @Input() articleName: string;
  public article: Article;

  constructor() { }

}
