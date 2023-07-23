import { NextFunction, Request, Response } from "express";
import TrackRepository from "../repository/implementation/track-repository";

class TrackController {
  public static getAllTracks(req: Request, res: Response, next: NextFunction) {
    try {
      const tracks = TrackRepository.getInstance().getAllTracks();
      res.status(200).json(tracks);
    } catch (error) {
      next(error);
    }
  }

  public static getTrackById(req: Request, res: Response, next: NextFunction) {
    try {
      const trackId = Number(req.params.id);
      const track = TrackRepository.getInstance().getTrack(trackId);
      res.status(200).json(track);
    } catch (error) {
      next(error);
    }
  }

  public static createTrack(req: Request, res: Response, next: NextFunction) {
    try {
      const track = TrackRepository.getInstance().createTrack(req.body);
      res.status(201).json(track);
    } catch (error) {
      next(error);
    }
  }

  public static updateTrack(req: Request, res: Response, next: NextFunction) {
    try {
      const track = TrackRepository.getInstance().updateTrack(req.body);
      res.status(200).json(track);
    } catch (error) {
      next(error);
    }
  }

  public static deleteTrack(req: Request, res: Response, next: NextFunction) {
    try {
      const trackId = Number(req.params.id);
      TrackRepository.getInstance().deleteTrack(trackId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

export default TrackController;