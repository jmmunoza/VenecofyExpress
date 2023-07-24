import Album from "../../model/album";

interface AlbumRepositoryInterface {
  getAlbum(id: number): Promise<Album>;
  getAllAlbums(): Promise<Album[]>;
  createAlbum(album: Album): Promise<Album>;
  updateAlbum(album: Album): Promise<Album>;
  deleteAlbum(id: number): Promise<void>;
}

export default AlbumRepositoryInterface;