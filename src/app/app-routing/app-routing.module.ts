import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleViewComponent } from '../article-view/article-view.component';
import { ArticleSummaryViewComponent } from '../article-summary-view/article-summary-view.component';
import { ArticleSummariesService } from '../article-summaries.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticleSummaryViewComponent
  },
  {
    path: 'articles/:name',
    component: ArticleViewComponent
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
