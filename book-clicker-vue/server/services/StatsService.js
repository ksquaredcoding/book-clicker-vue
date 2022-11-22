import { dbContext } from "../db/DbContext.js"

class StatsService {
  async getStats(accountId) {
    const stats = await dbContext.Stats.find({ accountId })
    return stats
  }

}

export const statsService = new StatsService()