import Artist from "../../model/artist";

interface ArtistRepositoryInterface {
  getArtist(id: number): Promise<Artist>;
  getAllArtists(): Promise<Artist[]>;
  createArtist(artist: Artist): Promise<Artist>;
  updateArtist(artist: Artist): Promise<Artist>;
  deleteArtist(id: number): Promise<void>;
}

export default ArtistRepositoryInterface;