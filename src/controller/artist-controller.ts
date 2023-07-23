import { NextFunction, Request, Response } from "express";
import ArtistRepository from "../repository/implementation/artist-repository";

class ArtistController {
  public static getArtistById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const artistId = Number(req.params.id);
      const artist = ArtistRepository.getInstance().getArtist(artistId);
      res.status(200).json(artist);
    } catch (error) {
      next(error);
    }
  }

  public static getAllArtists = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const artists = ArtistRepository.getInstance().getAllArtists();
      res.status(200).json(artists);
    } catch (error) {
      next(error);
    }
  }

  public static createArtist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const artist = ArtistRepository.getInstance().createArtist(req.body);
      res.status(201).json(artist);
    } catch (error) {
      next(error);
    }
  }

  public static updateArtist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const artist = ArtistRepository.getInstance().updateArtist(req.body);
      res.status(200).json(artist);
    } catch (error) {
      next(error);
    }
  }

  public static deleteArtist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const artistId = Number(req.params.id);
      ArtistRepository.getInstance().deleteArtist(artistId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

export default ArtistController;