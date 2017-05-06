import { Component, OnInit } from '@angular/core';
import { ArticleTease } from '../article-tease';
import { ArticleSummariesService } from '../article-summaries.service';

@Component({
  selector: 'app-article-summary-view',
  templateUrl: './article-summary-view.component.html',
  styleUrls: ['./article-summary-view.component.css']
})
export class ArticleSummaryViewComponent implements OnInit {

  selectedArticleName: string;

  articles: ArticleTease[];

  ngOnInit(): void {
    this.getArticleSummaries();
  }

  constructor(private ass: ArticleSummariesService) {
  }

  getArticleSummaries() {
    this.ass.getArticleSummaries().then((articles) => {
      this.articles = articles;
    });
  }

  public onSelect(title: string) {
    this.selectedArticleName = title;
  }


}
