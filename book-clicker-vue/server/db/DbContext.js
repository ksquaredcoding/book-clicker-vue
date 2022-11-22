import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { AutoUpgradeSchema } from "../models/AutoUpgrade.js";
import { ClickUpgradeSchema } from "../models/ClickUpgrade.js";
import { StatsSchema } from "../models/Stats.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Stats = mongoose.model('Stat', StatsSchema);
  AutoUpgrades = mongoose.model('AutoUpgrade', AutoUpgradeSchema);
  ClickUpgrades = mongoose.model('ClickUpgrade', ClickUpgradeSchema);
}

export const dbContext = new DbContext()
