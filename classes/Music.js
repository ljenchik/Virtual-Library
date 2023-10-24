// import the Media class:
const Media = require("./Media");
// create your Music class:
class Music extends Media {
    constructor(title, year, genre, artist, length) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }
    static shortestAlbum(arr) {
        let shortestAlbum = arr[0].length;
        let result = arr[0];
        for (const album of arr) {
            if (album.length < shortestAlbum) {
                shortestAlbum = album.length;
                result = album;
            }
        }
        return result;
    }
    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }
}
// don't change below
module.exports = Music;
