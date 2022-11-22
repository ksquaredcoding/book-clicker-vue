import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class UpgradesService {
  async buyClick(upgradeData) {
    const upgrade = await this.getClickByTitle(upgradeData.title)
    if (!upgrade) {
      const newUpgrade = await dbContext.ClickUpgrades.create(upgradeData)
      return newUpgrade
    }
    // @ts-ignore
    upgrade.quantity++
    return upgrade
  }
  async buyAuto(upgradeData) {
    const upgrade = await this.getAutoByTitle(upgradeData.title)
    if (!upgrade) {
      const newUpgrade = await dbContext.AutoUpgrades.create(upgradeData)
      return newUpgrade
    }
    // @ts-ignore
    upgrade.quantity++
    return upgrade
  }
  async getAutoUpgrades(accountId) {
    const autoUpgrades = await dbContext.AutoUpgrades.find({ accountId })
    return autoUpgrades
  }
  async getClickUpgrades(accountId) {
    const clickUpgrades = await dbContext.ClickUpgrades.find({ accountId })
    return clickUpgrades
  }

  async getClickByTitle(title) {
    const upgrade = await dbContext.ClickUpgrades.findOne({ title })
    return upgrade
  }
  // TODO add check for account to match upgrade
  async getAutoByTitle(title) {
    const upgrade = await dbContext.AutoUpgrades.findOne({ title })
    return upgrade
  }

}

export const upgradesService = new UpgradesService()