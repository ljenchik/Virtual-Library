// import the Media class:
const Media = require("./Media");
// create your Movie class:

class Movie extends Media {
    constructor(title, year, genre, director, duration, rating) {
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    static longestMovie(arr) {
        let longestDuration = arr[0].duration;
        let result = arr[0];
        for (const movie of arr) {
            if (movie.duration > longestDuration) {
                longestDuration = movie.duration;
                result = movie;
            }
        }
        return result;
    }
    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
}

// don't change below
module.exports = Movie;
