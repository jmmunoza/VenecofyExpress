import Album from "../../model/album";

interface AlbumServiceInterface {
  getAlbum(id: number): Album;
  getAllAlbums(): Album[];
  createAlbum(album: Album): Album;
  updateAlbum(album: Album): Album;
  deleteAlbum(id: number): void;
}

export default AlbumServiceInterface;