export class Article {
    public title: string;
    public tease: string;
    public sections: Section[];
    public tags: string[];
    public links: Links;
    public date: Date;
    public lastModified: Date;
    public people;
    public articles;

    constructor(json) {
        this.title = json.title;
        this.tease = json.tease;

        if (json.sections) {
            this.sections = json.sections.map((j) => {
                return new Section(j);
            });
        }

        if (json.tags) {
            this.tags = json.tags;
        }

        if (json.links) {
            this.links = new Links(json.links);
            this.people = this.links.groupPeople();
            this.articles = this.links.groupArticles();
        }

        this.date = json.date;
        this.lastModified = json.lastModified;

    }
}

export class Section {
    public title: string;
    public content: string;
    public references: Reference[]
    public order: number;

    constructor(json) {
        this.title = json.title;
        this.content = json.content;
        if (json.references) {
            this.references = json.references.map((r) => { return new Reference(r) });
        }
    }
}

export class Links {
    public people: PersonLink[];
    public articles: PersonLink[];

    constructor(json) {
        if (json.people) {
            this.people = json.people.map(p => { return new PersonLink(p) });
        }

        if (json.articles) {
            this.articles = json.articles.map(a => { return new ArticleLink(a) });
        }
    }

    public groupPeople(): Array<GroupedLink> {

        let grouped = Array<GroupedLink>();

        for (var p of this.people) {
            let group = grouped.find((s) => { return s.category == p.category });

            if (group == null) {
                group = new GroupedLink();
                group.category = p.category;
                grouped.push(group);
            }

            group.elements.push(p.name);
        }

        return grouped;
    }

    public groupArticles(): Array<GroupedLink> {

        let grouped = Array<GroupedLink>();

        for (var a of this.articles) {
            let group = grouped.find((s) => { return s.category == a.category });

            if (group == null) {
                group = new GroupedLink();
                group.category = a.category;
                grouped.push(group);
            }

            group.elements.push(a.name);
        }

        return grouped;
    }
}

export class GroupedLink {
    public category: string;
    public elements = [];
}

export class PersonLink {
    public name: string;
    public category: string

    constructor(json) {
        Object.assign(this, json);
    }
}

export class ArticleLink {
    public title: string;
    public category: string

    constructor(json) {
        Object.assign(this, json);
    }
}

export class Reference {
    public name: string;
    public source: string;
    public url: string;

    constructor(json) {
        Object.assign(this, json);
    }
}