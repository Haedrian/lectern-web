import { Component, OnInit } from '@angular/core';
import { ArticleTease } from '../article-tease';
import { ArticleSummariesService } from '../article-summaries.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-summary-view',
  templateUrl: './article-summary-view.component.html',
  styleUrls: ['./article-summary-view.component.css']
})
export class ArticleSummaryViewComponent implements OnInit {

  selectedArticleName: string;
  searchTerm: string;

  articles: ArticleTease[];

  ngOnInit(): void {

    //Wipe
    this.articles = null;

    this.route.queryParams.subscribe(params => {

      this.articles = null

      var page = params['page'];
      if (page) {
        page = Number(page);
      }

      var query = params['query'];

      this.getArticleSummaries(query, page);

    });

    // this.getArticleSummaries();
  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.router.navigate(['articles'], { queryParams: { query: searchTerm } });
    } else {
      //Clear the search term
      this.router.navigate(['articles']);
    }
  }

  constructor(private route: ActivatedRoute, private ass: ArticleSummariesService, private router: Router) {
  }

  getArticleSummaries(query: string, page: number) {
    this.ass.getArticleSummaries(query, page).then((articles) => {
      this.articles = articles;
    });
  }

  public onSelect(title: string) {
    this.selectedArticleName = title;
  }


}
