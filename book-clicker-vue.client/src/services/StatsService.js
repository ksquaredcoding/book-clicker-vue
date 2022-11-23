import { AppState } from "../AppState.js"
import { Stats } from "../models/Stats.js"
import { api } from "./AxiosService.js"

class StatsService {
  async createStats(statsData) {
    const stats = await api.get('/api/stats')
    if (!stats.data) {
      const res = await api.post('/api/stats', statsData)
      const newStats = new Stats(res.data)
      AppState.stats = newStats
      return newStats
    }
    AppState.stats = stats
    return stats
  }

  async getStats() {
    const res = await api.get('/api/stats')
    if (!res.data) {
      let statsData
      statsData.bookTotal = AppState.stats.bookTotal
      statsData.booksPerClick = AppState.stats.booksPerClick
      statsData.booksPerSec = AppState.stats.booksPerSec
      statsData.turned = AppState.stats.turned
      const res2 = await api.post('/api/stats', statsData)
      const newStats = new Stats(res2.data)
      AppState.stats = newStats
      return newStats
    }
    const stats = new Stats(res.data)
    AppState.stats = stats
    return stats
  }

  async updateStats(statsData) {
    await api.put('/api/stats', statsData)
  }
}

export const statsService = new StatsService()