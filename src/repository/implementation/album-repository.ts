import Album from "../../model/album";
import AlbumServicePrisma from "../../service/prisma/album-service-prisma";
import AlbumRepositoryInterface from "../interface/album-repository-interface";

class AlbumRepository implements AlbumRepositoryInterface {
  private static _instance: AlbumRepository;
  private _albumService: AlbumRepositoryInterface;

  private constructor() { 
    this._albumService = new AlbumServicePrisma();
  }

  public static getInstance(): AlbumRepository {
    if (!this._instance) {
      this._instance = new AlbumRepository();
    }

    return this._instance;
  }

  getAlbum(id: number): Album {
    return this._albumService.getAlbum(id);
  }
  getAllAlbums(): Album[] {
    return this._albumService.getAllAlbums();
  }
  createAlbum(album: Album): Album {
    return this._albumService.createAlbum(album);
  }
  updateAlbum(album: Album): Album {
    return this._albumService.updateAlbum(album);
  }
  deleteAlbum(id: number): void {
    this._albumService.deleteAlbum(id);
  } 
}

export default AlbumRepository;