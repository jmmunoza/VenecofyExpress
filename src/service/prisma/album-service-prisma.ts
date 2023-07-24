import Album from "../../model/album";
import Artist from "../../model/artist";
import Track from "../../model/track";
import AlbumServiceInterface from "../interface/album-service-interface";
import { prisma } from "./database/prisma-connection";

class AlbumServicePrisma implements AlbumServiceInterface {
  async getAlbum(id: number): Promise<Album> {
    const album = await prisma.album.findUnique({
      where: {
        id: id
      },
      include: {
        artist: true,
        tracks: true
      }
    });

    if (!album) {
      throw new Error("ALBUM_NOT_FOUND");
    }

    return new Album(
      album.id,
      album.name,
      album.releaseDate,
      new Artist(album.artist.id, album.artist.name),
      album.tracks.map(track => {
        return new Track(
          track.id,
          track.name,
          track.duration,
          track.reproductions,
          track.albumId,
          track.artistId
        );
      })
    );
  }

  async getAllAlbums(): Promise<Album[]> {
    const albums = await prisma.album.findMany();
    return albums.map(album => {
      return new Album(
        album.id,
        album.name,
        album.releaseDate,
        album.artistId)
    });
  }

  async createAlbum(album: Album): Promise<Album> {
    throw new Error("Method not implemented.");
  }

  async updateAlbum(album: Album): Promise<Album> {
    throw new Error("Method not implemented.");
  }

  async deleteAlbum(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export default AlbumServicePrisma;