import { Artist } from "./Artist";
import { Song } from "./Song";

export class Album {
    private _title: string;
    private _artist: Artist;
    private _year: number;
    private _songs: Song[] = [];

    constructor(title: string, artist: Artist, year: number) {
        this._title = title;
        this._artist = artist;
        this._year = year;
    }

    setTitle(title: string) {
        this._title = title;
    }
    getTitle(): string {
        return this._title;
    }
    addTrack(song: Song) {
        this._songs.push(song);
    }
}
