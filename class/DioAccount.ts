export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number
  private status: boolean

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
    this.balance = 0
    this.status = true
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + deposit
    }
  }

  withdraw = (withdraw: number): void => {
    if (this.validateStatus() && this.balance >= withdraw) {
      this.balance = this.balance - withdraw
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Invalid account')
  }
}
