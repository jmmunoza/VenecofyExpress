import Track from "../../model/track";

interface TrackServiceInterface {
  getTrack(id: number): Promise<Track>;
  getAllTracks(): Promise<Track[]>;
  createTrack(track: Track): Promise<Track>;
  updateTrack(track: Track): Promise<Track>;
  deleteTrack(id: number): Promise<void>;
}

export default TrackServiceInterface;