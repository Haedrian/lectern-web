import { Component, OnInit } from '@angular/core';
import { ArticleTease } from './article-tease';
import { ArticleSummariesService } from './article-summaries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleSummariesService]
})
export class AppComponent implements OnInit {
  title = 'Articles';

  selectedArticleName: string;

  articles: ArticleTease[];

  ngOnInit():void{
    this.getArticleSummaries();
  }

  constructor(private ass: ArticleSummariesService){
  }

  getArticleSummaries(){
    this.ass.getArticleSummaries().then( (articles) => {
      this.articles = articles;
    });
  }

  public onSelect(title: string) {
    this.selectedArticleName = title;
  }
}
