export class AutoUpgrade {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.quantity = data.quantity
    this.perSec = data.perSec
    this.price = data.price
    this.accountId = data.accountId
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }
}