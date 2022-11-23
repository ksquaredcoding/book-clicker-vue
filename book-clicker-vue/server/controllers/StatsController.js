import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { statsService } from "../services/StatsService.js"

export class StatsController extends BaseController {
  constructor() {
    super('api/stats')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getStats)
      .post('', this.createStats)
      .put('', this.updateStats)
  }

  async getStats(req, res, next) {
    try {
      const stats = await statsService.getStats(req.userInfo.id)
      res.send(stats)
    } catch (error) {
      next(error)
    }
  }

  async createStats(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.accountId = req.userInfo.id
      const stats = await statsService.createStats(req.body)
      res.send(stats)
    } catch (error) {
      next(error)
    }
  }

  async updateStats(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const stats = await statsService.updateStats(req.body)
      res.send(stats)
    } catch (error) {
      next(error)
    }
  }
}
