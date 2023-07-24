import Album from "../../model/album";
import Artist from "../../model/artist";
import Track from "../../model/track";
import TrackServiceInterface from "../interface/track-service-interface";
import { prisma } from "./database/prisma-connection";

class TrackServicePrisma implements TrackServiceInterface {
  async getTrack(id: number): Promise<Track> {
    const track = await prisma.track.findUnique({
      where: {
        id: id
      },
      include: {
        album: true,
        artist: true
      }
    });

    if (!track) {
      throw new Error("TRACK_NOT_FOUND");
    }

    return new Track(
      track.id,
      track.name,
      track.duration,
      track.reproductions,
      new Album(
        track.album.id, 
        track.album.name, 
        track.album.releaseDate, 
        track.album.artistId
      ),
      new Artist(
        track.artist.id, 
        track.artist.name
      )
    );
  }

  async getAllTracks(): Promise<Track[]> {
    const tracks = await prisma.track.findMany();
    return tracks.map(track => {
      return new Track(
        track.id,
        track.name,
        track.duration,
        track.reproductions,
        track.albumId,
        track.artistId
      );
    });
  }

  async createTrack(track: Track): Promise<Track> {
    throw new Error("Method not implemented.");
  }

  async updateTrack(track: Track): Promise<Track> {
    throw new Error("Method not implemented.");
  }
  
  async deleteTrack(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export default TrackServicePrisma;
