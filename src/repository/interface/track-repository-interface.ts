import Track from "../../model/track"; 

interface TrackRepositoryInterface {
  getTrack(id: number): Track;
  getAllTracks(): Track[];
  createTrack(track: Track): Track; 
  updateTrack(track: Track): Track;
  deleteTrack(id: number): void; 
}

export default TrackRepositoryInterface; 
