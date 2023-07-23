import express from 'express';
import TrackController from '../controller/track-controller';

const trackRoutes = express.Router(); 

trackRoutes.get('/', TrackController.getAllTracks); 
trackRoutes.get('/:id', TrackController.getTrackById);
trackRoutes.post('/', TrackController.createTrack);
trackRoutes.put('/', TrackController.updateTrack);
trackRoutes.delete('/:id', TrackController.deleteTrack);

export default trackRoutes;
