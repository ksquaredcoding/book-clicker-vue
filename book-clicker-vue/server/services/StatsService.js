import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class StatsService {
  async updateStats(statsData) {
    const stats = await this.getStats(statsData.accountId)
    // @ts-ignore
    stats.bookTotal = statsData.bookTotal || stats.bookTotal
    // @ts-ignore
    stats.bookPerSec = statsData.bookPerSec || stats.bookPerSec
    // @ts-ignore
    stats.booksPerClick = statsData.booksPerClick || stats.booksPerClick
    // @ts-ignore
    stats.turned = statsData.turned || stats.turned
    // @ts-ignore
    await stats.save()
    return stats
  }

  async createStats(statsData) {
    const stats = await this.getStatsNoCheck(statsData.accountId)
    if (!stats) {
      const newStats = await dbContext.Stats.create(statsData)
      return newStats
    }
    return stats
  }
  async getStats(accountId) {
    const stats = await dbContext.Stats.find({ accountId })
    if (!stats) {
      throw new BadRequest("No stats found for this account.")
    }
    return stats
  }

  async getStatsNoCheck(accountId) {
    const stats = await dbContext.Stats.find({ accountId })
    return stats
  }

}

export const statsService = new StatsService()