export class ArticleTease {
    public title: string;
    public tease: string;
    public date: Date;
    public lastModified: Date;

    public constructor(json: any) {
        this.title = json.title;
        this.tease = json.tease;
        this.date = new Date(json.date);
        this.lastModified = new Date(json.lastModified);
    }

    public cleanDate() {
        return this.getISODate(this.date);
    }

    public cleanLastUpdated() {
        return this.getISODate(this.lastModified);
    }

    private getISODate(date: Date): string {
        console.log(date);
        if (!date) {
            return "";
        }

        if (isNaN(date.getTime())) {
            return ""; //Not a date
        }

        if (date.toISOString) {
            return date.toISOString().split('T')[0];
        }

        return "";
    }
}
