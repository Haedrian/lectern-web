export class ArticleTease {
    public title: string;
    public tease: string;
    public date: Date;
    public lastUpdated: Date;

    public constructor(json: any) {
        Object.assign(this, json);
    }

    public cleanDate() {
        return this.getISODate(this.date);
    }

    public cleanLastUpdated() {
        return this.getISODate(this.lastUpdated);
    }

    private getISODate(date: Date): string {
        if (!date) {
            return null;
        }

        return date.toISOString().split('T')[0];
    }
}
