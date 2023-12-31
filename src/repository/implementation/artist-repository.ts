import Artist from "../../model/artist";
import ArtistServiceInterface from "../../service/interface/artist-service-interface";
import ArtistServicePrisma from "../../service/prisma/artist-service-prisma";
import ArtistRepositoryInterface from "../interface/artist-repository-interface";

class ArtistRepository implements ArtistRepositoryInterface {
  private static _instance: ArtistRepository;
  private _artistService: ArtistServiceInterface;

  private constructor() { 
    this._artistService = new ArtistServicePrisma();
  }

  public static getInstance(): ArtistRepository {
    if (!this._instance) {
      this._instance = new ArtistRepository();
    }

    return this._instance;
  }

  getArtist(id: number): Promise<Artist> {
    return this._artistService.getArtist(id);
  }

  getAllArtists(): Promise<Artist[]> {
    return this._artistService.getAllArtists();
  }

  createArtist(artist: Artist): Promise<Artist> {
    return this._artistService.createArtist(artist);
  }

  updateArtist(artist: Artist): Promise<Artist> {
    return this._artistService.updateArtist(artist);
  }

  deleteArtist(id: number): Promise<void> {
    return this._artistService.deleteArtist(id);
  }
}

export default ArtistRepository;