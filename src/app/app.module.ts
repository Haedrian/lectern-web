import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleSummaryViewComponent } from './article-summary-view/article-summary-view.component';
import { ArticleSummariesService } from './article-summaries.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleService } from './article.service';
import { PersonService } from './person.service';

import { PersonComponent } from './person-summary/person-summary.component';
import { PersonViewComponent } from './person-view/person-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleViewComponent,
    ArticleSummaryViewComponent,
    DashboardComponent,
    PersonComponent,
    PersonViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ArticleSummariesService, ArticleService, PersonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
