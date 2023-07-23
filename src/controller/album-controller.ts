import { NextFunction, Request, Response } from "express";
import AlbumRepository from "../repository/implementation/album-repository";

class AlbumController {
  public static getAllAlbums(req: Request, res: Response, next: NextFunction) {
    try {
      const albums = AlbumRepository.getInstance().getAllAlbums();
      res.status(200).json(albums);
    } catch (error) {
      next(error);
    }
  }

  public static getAlbumById(req: Request, res: Response, next: NextFunction) {
    try {
      const albumId = Number(req.params.id);
      const album = AlbumRepository.getInstance().getAlbum(albumId);
      res.status(200).json(album);
    } catch (error) {
      next(error);
    }
  }

  public static createAlbum(req: Request, res: Response, next: NextFunction) {
    try {
      const album = AlbumRepository.getInstance().createAlbum(req.body);
      res.status(201).json(album);
    } catch (error) {
      next(error);
    }
  }

  public static updateAlbum(req: Request, res: Response, next: NextFunction) {
    try {
      const album = AlbumRepository.getInstance().updateAlbum(req.body);
      res.status(200).json(album);
    } catch (error) {
      next(error);
    }
  }

  public static deleteAlbum(req: Request, res: Response, next: NextFunction) {
    try {
      const albumId = Number(req.params.id);
      AlbumRepository.getInstance().deleteAlbum(albumId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

export default AlbumController;