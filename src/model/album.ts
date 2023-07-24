import Artist from "./artist";
import Track from "./track";

class Album {
  private id: number;
  private name: string;
  private releaseDate: Date;
  private artist: Artist | number;
  private tracks?: Track[];

  public constructor(id: number, name: string, releaseDate: Date, artist: Artist | number, tracks?: Track[]) {
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
    this.artist = artist;
    this.tracks = tracks;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getReleaseDate(): Date {
    return this.releaseDate;
  }

  public getArtist(): Artist | number {
    return this.artist;
  }

  public getTracks(): Track[] | undefined {
    return this.tracks;
  }
}

export default Album;