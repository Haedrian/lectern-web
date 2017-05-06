export class Article {
    public title: string;
    public tease: string;
    public sections: Section[];
    public tags: string[];
    public links: Links;
    public date: Date;
    public lastModified: Date;
}

export class Section {
    public title: string;
    public content: string;
    public references: string[]
}

export class Links {
    public people: PersonLink[];
    public articles: PersonLink[];
}

export class PersonLink{
    public name: string;
    public category: string
}

export class ArticleLink{
    public title: string;
    public category: string
}

export class Reference{
    public name: string;
    public source: string;
    public url: string;
}