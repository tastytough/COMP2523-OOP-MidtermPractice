import { Song } from "./Song";

export class Playlists {
    private _playlistName: string;
    private _songList: Song[] = [];
    
    constructor(playlistName: string) {
        this._playlistName = playlistName;
    }
    getPlaylist(playlistName: string) {
        return this._playlistName = playlistName;
    }
    setPlaylist(playlistName: string) {
        this._playlistName = playlistName;
    }

    addAlbum(album: string) {

    }
}