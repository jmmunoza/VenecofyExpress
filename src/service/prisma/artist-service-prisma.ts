import Artist from "../../model/artist";
import ArtistServiceInterface from "../interface/artist-service-interface";

class ArtistServicePrisma implements ArtistServiceInterface {
  getArtist(id: number): Artist {
    throw new Error("Method not implemented.");
  }

  getAllArtists(): Artist[] {
    return [];
  }

  createArtist(artist: Artist): Artist {
    throw new Error("Method not implemented.");
  }

  updateArtist(artist: Artist): Artist {
    throw new Error("Method not implemented.");
  }

  deleteArtist(id: number): void {
    throw new Error("Method not implemented.");
  }
}

export default ArtistServicePrisma;