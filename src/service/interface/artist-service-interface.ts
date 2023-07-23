import Artist from "../../model/artist";

interface ArtistServiceInterface {
  getArtist(id: number): Artist;
  getAllArtists(): Artist[];
  createArtist(artist: Artist): Artist;
  updateArtist(artist: Artist): Artist;
  deleteArtist(id: number): void;
}

export default ArtistServiceInterface;