import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { statsService } from "../services/StatsService.js"

export class StatsController extends BaseController {
  constructor() {
    super('api/stats')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getStats)
      .post('', this.create)
  }

  async getStats(req, res, next) {
    try {
      const stats = await statsService.getStats(req.userInfo.id)
      res.send(stats)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      res.send(req.body)
    } catch (error) {
      next(error)
    }
  }
}
