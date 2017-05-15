import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleViewComponent } from '../article-view/article-view.component';
import { ArticleSummaryViewComponent } from '../article-summary-view/article-summary-view.component';
import { ArticleSummariesService } from '../article-summaries.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PersonViewComponent } from '../person-view/person-view.component';
import { PersonComponent } from '../person-summary/person-summary.component';
import { ArticleResolve } from "../article.resolve";
import { PersonResolve } from "../person.resolve";

const routes: Routes = [
  {
    path: 'articles',
    component: ArticleSummaryViewComponent
  },
  {
    path: 'articles/:name',
    component: ArticleViewComponent,
    resolve: {
      article: ArticleResolve
    }
  },
  {
    path: 'people/:name',
    component: PersonViewComponent,
    resolve:
    {
      person: PersonResolve
    }
  },
  {
    path: 'people',
    component: PersonComponent
  },
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
