class ElectronicBook extends Book {
    private format: string;

    constructor(title: string, author: string, year: number, format: string) {
        super(title, author, year);
        this.format = format;
    }

    public getSummary(): string {
        return `Now I can download "${super.getSummary()}" in ${this.format} format`;
    }
}