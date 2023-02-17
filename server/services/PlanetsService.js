import { dbContext } from "../db/DbContext.js"


class PlanetsService{
  async createPlanet(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }
  async getAllPlanets() {
    const planets = await dbContext.Planets.find().populate("galaxy", "name")
    return planets
  }

}

export const planetsService = new PlanetsService()