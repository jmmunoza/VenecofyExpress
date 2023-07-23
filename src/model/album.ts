import Artist from "./artist";

class Album {
  private _id: number;
  private _name: string;
  private _releaseDate: Date;
  private _artist: Artist;

  public constructor(id: number, name: string, releaseDate: Date, artist: Artist) {
    this._id = id;
    this._name = name;
    this._releaseDate = releaseDate;
    this._artist = artist;
  }

  public getId(): number {
    return this._id;
  }

  public getName(): string {
    return this._name;
  }

  public getReleaseDate(): Date {
    return this._releaseDate;
  }

  public getArtist(): Artist {
    return this._artist;
  }
}

export default Album;