import Album from "./album";
import Artist from "./artist";

class Track {
  private _id: number;
  private _name: string;
  private _duration: number;
  private _reproductions: number;
  private _album: Album;
  private _artist: Artist;

  public constructor(id: number, name: string, duration: number, reproductions: number, album: Album, artist: Artist) {
    this._id = id;
    this._name = name;
    this._duration = duration;
    this._reproductions = reproductions;
    this._album = album;
    this._artist = artist;
  }

  public getId(): number {
    return this._id;
  }

  public getName(): string {
    return this._name;
  }

  public getDuration(): number {
    return this._duration;
  }

  public getReproductions(): number {
    return this._reproductions;
  }

  public getAlbum(): Album {
    return this._album;
  }

  public getArtist(): Artist {
    return this._artist;
  }
}

export default Track;