import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleSummaryViewComponent } from './article-summary-view/article-summary-view.component';
import { ArticleSummariesService } from './article-summaries.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleService } from './article.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleViewComponent,
    ArticleSummaryViewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'articles',
        component: ArticleSummaryViewComponent
      },
      {
        path: 'articles/:name',
        component: ArticleViewComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [ArticleSummariesService, ArticleService],
  bootstrap: [AppComponent]
})

export class AppModule { }
