import Album from "../../model/album";
import Artist from "../../model/artist";
import ArtistServiceInterface from "../interface/artist-service-interface";
import { prisma } from "./database/prisma-connection";

class ArtistServicePrisma implements ArtistServiceInterface {
  async getArtist(id: number): Promise<Artist> {
    const artist = await prisma.artist.findUnique({
      where: {
        id: id
      },
      include: {
        albums: true
      }
    });

    if (!artist) {
      throw new Error("ARTIST_NOT_FOUND");
    }

    return new Artist(
      artist.id,
      artist.name,
      artist.albums.map(album => {
        return new Album(
          album.id,
          album.name,
          album.releaseDate,
          album.artistId
        );
      })
    );

  }

  async getAllArtists(): Promise<Artist[]> {
    const artists = await prisma.artist.findMany();
    return artists.map(artist => {
      return new Artist(
        artist.id,
        artist.name,
      );
    });
  }

  async createArtist(artist: Artist): Promise<Artist> {
    throw new Error("Method not implemented.");
  }

  async updateArtist(artist: Artist): Promise<Artist> {
    throw new Error("Method not implemented.");
  }

  async deleteArtist(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export default ArtistServicePrisma;