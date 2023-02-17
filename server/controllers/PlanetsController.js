import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController{
  constructor(){
    super('api/planets')
    this.router
      .get('', this.getAllPlanets)
      .post('', this.createPlanet)
    
  }
  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const planet = await planetsService.createPlanet(planetData)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
  async getAllPlanets(req, res, next) {
    try {

      const planets = await planetsService.getAllPlanets()
      return res.send(planets)

    } catch (error) {
      next(error)
    }
  }
}