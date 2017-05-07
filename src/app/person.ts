import { ArticleTease } from "./article-tease";

export class Person {
    name: string;
    about: string;
    relatedArticles: ArticleTease[];

    constructor(json) {
        this.name = json.name;
        this.about = json.about;

        if (json.relatedArticles) {
            this.relatedArticles = json.relatedArticles.map((ra) => { return new ArticleTease(ra) });
        }
    }
}
