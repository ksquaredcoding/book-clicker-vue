import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { statsService } from "./StatsService.js"

class UpgradesService {
  async buyClick(upgradeData) {
    const upgrade = await this.getClickByTitle(upgradeData.title, upgradeData.accountId)
    const stats = await statsService.getStats(upgradeData.accountId)
    if (!upgrade) {
      // @ts-ignore
      if (upgradeData.price > stats.bookTotal) {
        throw new Forbidden("You need more books to purchase this click upgrade")
      }
      const newUpgrade = await dbContext.ClickUpgrades.create(upgradeData)
      // @ts-ignore
      newUpgrade.price *= 2
      await newUpgrade.save()
      return newUpgrade
    }
    // @ts-ignore
    if (upgrade.price > stats.bookTotal) {
      throw new Forbidden("You need more books to purchase this click upgrade")
    }
    // @ts-ignore
    upgrade.quantity++
    // @ts-ignore
    upgrade.price *= 2
    await upgrade.save()
    return upgrade
  }

  async buyAuto(upgradeData) {
    const upgrade = await this.getAutoByTitle(upgradeData.title, upgradeData.accountId)
    const stats = await statsService.getStats(upgradeData.accountId)
    if (!upgrade) {
      // @ts-ignore
      if (upgradeData.price > stats.bookTotal) {
        throw new Forbidden("You need more books to purchase this auto upgrade")
      }
      const newUpgrade = await dbContext.AutoUpgrades.create(upgradeData)
      // @ts-ignore
      newUpgrade.price *= 2
      await newUpgrade.save()
      return newUpgrade
    }
    // @ts-ignore
    if (upgrade.price > stats.bookTotal) {
      throw new Forbidden("You need more books to purchase this auto upgrade")
    }
    // @ts-ignore
    upgrade.quantity++
    // @ts-ignore
    upgrade.price *= 2
    await upgrade.save()
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

  async getClickByTitle(title, accountId) {
    const upgrade = await dbContext.ClickUpgrades.findOne({ title, accountId })
    return upgrade
  }

  async getAutoByTitle(title, accountId) {
    const upgrade = await dbContext.AutoUpgrades.findOne({ title, accountId })
    return upgrade
  }

}

export const upgradesService = new UpgradesService()