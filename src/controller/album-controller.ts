import { NextFunction, Request, Response } from "express";
import AlbumRepository from "../repository/implementation/album-repository";

class AlbumController {
  public static async getAllAlbums(req: Request, res: Response, next: NextFunction) {
    try {
      const albums = await AlbumRepository.getInstance().getAllAlbums();
      res.status(200).json(albums);
    } catch (error) {
      next(error);
    }
  }

  public static async getAlbumById(req: Request, res: Response, next: NextFunction) {
    try {
      const albumId = Number(req.params.id);
      const album = await AlbumRepository.getInstance().getAlbum(albumId);
      res.status(200).json(album);
    } catch (error) {
      next(error);
    }
  }

  public static async createAlbum(req: Request, res: Response, next: NextFunction) {
    try {
      const album = await AlbumRepository.getInstance().createAlbum(req.body);
      res.status(201).json(album);
    } catch (error) {
      next(error);
    }
  }

  public static async updateAlbum(req: Request, res: Response, next: NextFunction) {
    try {
      const album = await AlbumRepository.getInstance().updateAlbum(req.body);
      res.status(200).json(album);
    } catch (error) {
      next(error);
    }
  }

  public static async deleteAlbum(req: Request, res: Response, next: NextFunction) {
    try {
      const albumId = Number(req.params.id);
      await AlbumRepository.getInstance().deleteAlbum(albumId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

export default AlbumController;