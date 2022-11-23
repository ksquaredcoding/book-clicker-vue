export class Stats {
  constructor(data) {
    this.id = data.id
    this.bookTotal = data.bookTotal
    this.booksPerClick = data.booksPerClick
    this.booksPerSec = data.booksPerSec
    this.turned = data.turned
    this.accountId = data.accountId
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }
}