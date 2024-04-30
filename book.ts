class Book {
    private title: string;
    private author: string;
    private year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public getSummary(): string {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
}