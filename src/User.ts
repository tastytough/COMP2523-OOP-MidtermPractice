import { Album } from "./Album";
import { Playlists } from "./Playlist";

export class User {
    private _username: string;
    private _password: string;
    playlists: Playlists;
    albums: Album;

    constructor (username: string, password: string, playlists: Playlists, albums: Album) {
        this._username = username;
        this._password = password;
        this.playlists = playlists;
        this.albums = albums
    }
    getUser (username: string, password: string) {
        this._username = username;
        this._password = password;
    }
    setUser (username: string, password: string) {
        this._username = username;
        this._password = password
    }

    addPlaylist() {

    }

    addAlbum() {}

    getSong() {}
}
