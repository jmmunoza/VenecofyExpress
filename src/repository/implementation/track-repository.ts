import Track from "../../model/track";
import TrackServicePrisma from "../../service/prisma/track-service-prisma"; 

import TrackRepositoryInterface from "../interface/track-repository-interface"; 

class TrackRepository implements TrackRepositoryInterface { 
  private static _instance: TrackRepository;
  private _trackService: TrackServicePrisma; 

  private constructor() { 
    this._trackService = new TrackServicePrisma(); 
  }

  public static getInstance(): TrackRepository { 
    if (!this._instance) {
      this._instance = new TrackRepository();
    }

    return this._instance;
  }

  getTrack(id: number): Promise<Track> {
    return this._trackService.getTrack(id); 
  }

  getAllTracks(): Promise<Track[]> { 
    return this._trackService.getAllTracks(); 
  }

  createTrack(track: Track): Promise<Track> { 
    return this._trackService.createTrack(track);
  }

  updateTrack(track: Track): Promise<Track> { 
    return this._trackService.updateTrack(track); 
  }

  deleteTrack(id: number): Promise<void> { 
    return this._trackService.deleteTrack(id);
  }
}

export default TrackRepository;