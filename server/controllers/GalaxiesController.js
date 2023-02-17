import { dbContext } from "../db/DbContext.js";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxiesController extends BaseController{
  constructor(){
    super('api/galaxies')
      this.router
        .get('', this.getAllGalaxies)
        .post('', this.createGalaxy)
  }
  
  async getAllGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAllGalaxies()
      return res.send(galaxies)

    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const galaxy = await galaxiesService.createGalaxy(galaxyData)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}