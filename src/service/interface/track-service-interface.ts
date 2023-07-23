import Track from "../../model/track";

interface TrackServiceInterface {
  getTrack(id: number): Track;
  getAllTracks(): Track[];
  createTrack(track: Track): Track;
  updateTrack(track: Track): Track;
  deleteTrack(id: number): void;
}

export default TrackServiceInterface;