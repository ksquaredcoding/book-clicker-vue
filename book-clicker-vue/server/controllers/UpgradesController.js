import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { upgradesService } from "../services/UpgradesService.js"

export class UpgradesController extends BaseController {
  constructor() {
    super('api/upgrades')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/click', this.getClickUpgrades)
      .get('/auto', this.getAutoUpgrades)
      .post('/click', this.buyClick)
      .post('/auto', this.buyAuto)
  }

  async getClickUpgrades(req, res, next) {
    try {
      const upgrades = await upgradesService.getClickUpgrades(req.userInfo.id)
      res.send(upgrades)
    } catch (error) {
      next(error)
    }
  }

  async getAutoUpgrades(req, res, next) {
    try {
      const upgrades = await upgradesService.getAutoUpgrades(req.userInfo.id)
      res.send(upgrades)
    } catch (error) {
      next(error)
    }
  }

  async buyClick(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const upgrade = await upgradesService.buyClick(req.body)
      res.send(upgrade)
    } catch (error) {
      next(error)
    }
  }

  async buyAuto(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const upgrade = await upgradesService.buyAuto(req.body)
      res.send(upgrade)
    } catch (error) {
      next(error)
    }
  }
}
