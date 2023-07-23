import Track from "../../model/track";
import TrackServiceInterface from "../interface/track-service-interface";

class TrackServicePrisma implements TrackServiceInterface {
  getTrack(id: number): Track {
    throw new Error("Method not implemented.");
  }

  getAllTracks(): Track[] {
    return [];
  }

  createTrack(track: Track): Track {
    throw new Error("Method not implemented.");
  }

  updateTrack(track: Track): Track {
    throw new Error("Method not implemented.");
  }
  
  deleteTrack(id: number): void {
    throw new Error("Method not implemented.");
  }
}

export default TrackServicePrisma;
