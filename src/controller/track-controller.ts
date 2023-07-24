import { NextFunction, Request, Response } from "express";
import TrackRepository from "../repository/implementation/track-repository";

class TrackController {
  public static async getAllTracks(req: Request, res: Response, next: NextFunction) {
    try {
      const tracks = await TrackRepository.getInstance().getAllTracks();
      res.status(200).json(tracks);
    } catch (error) {
      next(error);
    }
  }

  public static async getTrackById(req: Request, res: Response, next: NextFunction) {
    try {
      const trackId = Number(req.params.id);
      const track = await TrackRepository.getInstance().getTrack(trackId);
      res.status(200).json(track);
    } catch (error) {
      next(error);
    }
  }

  public static async createTrack(req: Request, res: Response, next: NextFunction) {
    try {
      const track = await TrackRepository.getInstance().createTrack(req.body);
      res.status(201).json(track);
    } catch (error) {
      next(error);
    }
  }

  public static async updateTrack(req: Request, res: Response, next: NextFunction) {
    try {
      const track = await TrackRepository.getInstance().updateTrack(req.body);
      res.status(200).json(track);
    } catch (error) {
      next(error);
    }
  }

  public static async deleteTrack(req: Request, res: Response, next: NextFunction) {
    try {
      const trackId = Number(req.params.id);
      await TrackRepository.getInstance().deleteTrack(trackId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

export default TrackController;