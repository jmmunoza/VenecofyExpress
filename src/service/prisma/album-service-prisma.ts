import Album from "../../model/album";
import AlbumServiceInterface from "../interface/album-service-interface";

class AlbumServicePrisma implements AlbumServiceInterface {
  getAlbum(id: number): Album {
    throw new Error("Method not implemented.");
  }

  getAllAlbums(): Album[] {
    return [];
  }

  createAlbum(album: Album): Album {
    throw new Error("Method not implemented.");
  }

  updateAlbum(album: Album): Album {
    throw new Error("Method not implemented.");
  }
  
  deleteAlbum(id: number): void {
    throw new Error("Method not implemented.");
  }
}

export default AlbumServicePrisma;