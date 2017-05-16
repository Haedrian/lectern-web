import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ArticleService } from './article.service';
import { Article } from "./article";
import { Location } from "@angular/common";

@Injectable()
export class ArticleResolve implements Resolve<Article> {

    constructor(private articleService: ArticleService, private location: Location) { }

    resolve(route: ActivatedRouteSnapshot): Promise<Article> {
        return this.articleService.getArticle(route.paramMap.get('name')).then((article) => {

            if (article) {
                return Promise.resolve(article);
            }
            else {
                //Stop them?
                return Promise.reject("Article not found");
            }

        })
    }
}