import express from 'express';
import AlbumController from '../controller/album-controller';

const albumRoutes = express.Router();

albumRoutes.get('/', AlbumController.getAllAlbums);
albumRoutes.get('/:id', AlbumController.getAlbumById);
albumRoutes.post('/', AlbumController.createAlbum);
albumRoutes.put('/', AlbumController.updateAlbum);
albumRoutes.delete('/:id', AlbumController.deleteAlbum);

export default albumRoutes;