import Album from "./album";
import Artist from "./artist";

class Track {
  private id: number;
  private name: string;
  private duration: number;
  private reproductions: number;
  private album: Album | number;
  private artist: Artist | number;

  public constructor(id: number, name: string, duration: number, reproductions: number, album: Album | number, artist: Artist | number) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.reproductions = reproductions;
    this.album = album;
    this.artist = artist;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDuration(): number {
    return this.duration;
  }

  public getReproductions(): number {
    return this.reproductions;
  }

  public getAlbum(): Album | number {
    return this.album;
  }

  public getArtist(): Artist | number {
    return this.artist;
  }
}

export default Track;