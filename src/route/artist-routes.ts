import express from 'express';
import ArtistController from '../controller/artist-controller';

const artistRoutes = express.Router();

artistRoutes.get('/', ArtistController.getAllArtists);
artistRoutes.get('/:id', ArtistController.getArtistById);
artistRoutes.post('/', ArtistController.createArtist);
artistRoutes.put('/', ArtistController.updateArtist);
artistRoutes.delete('/:id', ArtistController.deleteArtist);

export default artistRoutes;