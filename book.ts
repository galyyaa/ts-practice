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