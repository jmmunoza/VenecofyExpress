class Artist {
  private _id: number;
  private _name: string;

  public constructor(id: number, name: string) {
    this._name = name;
    this._id = id;
  }

  public getId(): number {
    return this._id;
  }

  public getName(): string {
    return this._name;
  }
}

export default Artist;