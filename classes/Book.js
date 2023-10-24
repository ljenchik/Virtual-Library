// import the Media class:
const Media = require("./Media");

// create your Book class:
class Book extends Media {
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }
    static highestRating(arr) {
        let maxRating = arr[0].rating;
        let result = arr[0];
        for (const book of arr) {
            if (book.rating > maxRating) {
                maxRating = book.rating;
                result = book;
            }
        }
        return result;
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
}

// don't change below
module.exports = Book;
