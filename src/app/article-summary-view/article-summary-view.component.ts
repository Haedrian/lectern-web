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

  amountPerPage = 20;
  totalPages = 0;
  currentPage = 0;

  ngOnInit(): void {

    //Wipe
    this.articles = null;

    this.route.queryParams.subscribe(params => {

      this.articles = null

      this.currentPage = params['page'];
      if (this.currentPage) {
        this.currentPage = Number(this.currentPage);
      } else {
        this.currentPage = 0;
      }

      var query = params['query'];

      if (query) {
        this.searchTerm = query;
      }

      this.getArticleSummaries(query, this.currentPage);

    });
  }

  changePage(changeTo) {
    this.router.navigate([], { queryParamsHandling: "merge", queryParams: { page: changeTo } });
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

      return this.ass.getArticleSummaryCounts(query).then((total) => {
        this.totalPages = Math.floor(total / this.amountPerPage);
      });

    });
  }

  public onSelect(title: string) {
    this.selectedArticleName = title;
  }


}
