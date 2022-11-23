import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Stats.js').Stats} */
  stats: {},
  /** @type {import('./models/ClickUpgrade.js').ClickUpgrade[]} */
  clickUpgrades: [],
  /** @type {import('./models/AutoUpgrade.js').AutoUpgrade[]} */
  autoUpgrades: [],
})
