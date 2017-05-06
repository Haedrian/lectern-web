import { Component } from '@angular/core';
import { ArticleTease } from './article-tease';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Articles';

  selectedArticleName: string;

  articles: ArticleTease[] = [
    new ArticleTease({ title: "Test", tease: "I am a test", date: new Date(), lastUpdated: new Date() }),
    new ArticleTease({ title: "Test2", tease: "I am also a test", date: new Date(), lastUpdated: new Date() }),
    new ArticleTease({ title: "Test3", tease: "Lorem ipsum and all that jazz", date: new Date(), lastUpdated: new Date() }),
  ]

  public onSelect(title: string){
    this.selectedArticleName = title;
  }
}
