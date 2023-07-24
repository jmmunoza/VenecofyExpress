import Album from "./album";


class Artist {
  private id: number;
  private name: string;
  private albums?: Album[];

  public constructor(id: number, name: string, albums?: Album[]) {
    this.name = name;
    this.id = id;
    this.albums = albums;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAlbums(): Album[] | undefined {
    return this.albums;
  }
}

export default Artist;