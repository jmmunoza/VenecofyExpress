import { NextFunction, Request, Response } from "express";
import ArtistRepository from "../repository/implementation/artist-repository";

class ArtistController {
  public static async getAllArtists(req: Request, res: Response, next: NextFunction) {
    try {
      const artists = await ArtistRepository.getInstance().getAllArtists();
      res.status(200).json(artists);
    } catch (error) {
      next(error);
    }
  }

  public static async getArtistById(req: Request, res: Response, next: NextFunction) {
    try {
      const artistId = Number(req.params.id);
      const artist = await ArtistRepository.getInstance().getArtist(artistId);
      res.status(200).json(artist);
    } catch (error) {
      next(error);
    }
  }

  public static async createArtist(req: Request, res: Response, next: NextFunction) {
    try {
      const artist = await ArtistRepository.getInstance().createArtist(req.body);
      res.status(201).json(artist);
    } catch (error) {
      next(error);
    }
  }

  public static async updateArtist(req: Request, res: Response, next: NextFunction) {
    try {
      const artist = await ArtistRepository.getInstance().updateArtist(req.body);
      res.status(200).json(artist);
    } catch (error) {
      next(error);
    }
  }

  public static async deleteArtist(req: Request, res: Response, next: NextFunction) {
    try {
      const artistId = Number(req.params.id);
      await ArtistRepository.getInstance().deleteArtist(artistId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

export default ArtistController;